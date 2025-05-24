import { Card } from "@/components/ui/card"
import axios from "axios"
import { useEffect, useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
const API_BASE = import.meta.env.VITE_API_BASE;

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import toast, { Toaster } from "react-hot-toast"
const formSchema = z.object({
    oldPassword: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
        .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
        .regex(/[0-9]/, { message: 'Password must contain at least one number' })
        .regex(/[@$!%*?&]/, { message: 'Password must contain at least one special character' }),
    newPassword: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
        .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
        .regex(/[0-9]/, { message: 'Password must contain at least one number' })
        .regex(/[@$!%*?&]/, { message: 'Password must contain at least one special character' }),
    ConfirmPassword: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
        .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
        .regex(/[0-9]/, { message: 'Password must contain at least one number' })
        .regex(/[@$!%*?&]/, { message: 'Password must contain at least one special character' }),
})
    .refine((data) => data.newPassword === data.ConfirmPassword, {
        message: "Confirm password must match new password",
        path: ["ConfirmPassword"],
    });
const Profile = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            oldPassword: "",
            newPassword: "",
            ConfirmPassword: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        if (!token) {
            return;
        }
        axios.put(`${API_BASE}/changePassword`, { ...values }, { headers: { token: JSON.parse(token) } })
            .then(() => toast.success('Password Changed Successfully'))
            .catch(() => toast.error('Wrong User Password'))
        form.reset()
    }
    const [user, setUser] = useState<{ username?: string; email?: string; posts?: string }>({})
    useEffect(() => {
        if (!token) {
            navigate('/')
            return;
        }
        axios.get(`${API_BASE}/user`, { headers: { token: JSON.parse(token) } })
            .then((e) => { setUser(e.data) })
            .catch((res) => console.log(res))
    }, [])

    return (
        <div className="flex justify-center items-center h-[90vh] flex-col">
            <Toaster position="top-right" reverseOrder={false} />
            <Card className="px-6 w-72 sm:w-96">
                <h1>Username : {user.username}</h1>
                <h1>Email : {user.email}</h1>
                <h1>Total Saved Posts : {user.posts}</h1>
            </Card>
            <Card className="px-6 gap-4 mt-10 w-72 sm:w-96">
                <h1 className="text-3xl">Change Password</h1>
                <p className="font-bold">Sorry, this feature is disabled to prevent changes to the demo password.</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="oldPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Old Password" {...field} type="password" disabled/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="newPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="New Password" {...field} type="password" disabled/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ConfirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Confirm Password" {...field} type="password" disabled/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="cursor-pointer" disabled>Submit</Button>
                    </form>
                </Form>
            </Card>
        </div>
    )
}

export default Profile