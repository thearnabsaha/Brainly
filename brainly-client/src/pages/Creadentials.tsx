import { Button } from "@/components/ui/button"
import {Card,CardContent,CardDescription,CardHeader,CardTitle} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useNavigate } from "react-router-dom"
import axios, {AxiosResponse } from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
const API_BASE = import.meta.env.VITE_API_BASE;
const signupSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  username: z.string().min(3, { message: 'Username must be at least 3 characters long' }),
  password: z
  .string()
  .min(8, { message: 'Password must be at least 8 characters long' })
  .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
  .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
  .regex(/[0-9]/, { message: 'Password must contain at least one number' })
  .regex(/[@$!%*?&]/, { message: 'Password must contain at least one special character' }),
});
const signinSchema = z.object({
  username: z.string().min(3, { message: 'Username must be at least 3 characters long' }),
  password: z
  .string()
  .min(8, { message: 'Password must be at least 8 characters long' })
  .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
  .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
  .regex(/[0-9]/, { message: 'Password must contain at least one number' })
  .regex(/[@$!%*?&]/, { message: 'Password must contain at least one special character' }),
});
const Credentials = () => {
  const Signupform = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    }
  })
  
  async function onSubmitSignup(values: z.infer<typeof signupSchema>) {
    await axios.post(`${API_BASE}/signup`,{...values})
    .then((res)=>handleToastSignup(res))
    .catch((res)=>handleToastSignup(res))
  }
  
  const Signinform = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema)
  })
  
  async function onSubmitSignin(values: z.infer<typeof signinSchema>) {
    await axios.post(`${API_BASE}/signin`,{...values})
    .then(handleToastSignin)
    .catch((res)=>handleToastSignin(res))
  }
  const navigate=useNavigate()
  const handleToastSignup=(res:AxiosResponse)=>{
    if(res.status==200){
      toast.success('Signup Successful')
      Signupform.reset()
    }
    res.status==400&&toast.error('Invalid Credentials')
    res.status==404&&toast.error("Route doesn't exist")
    res.status==409&&toast.error("User Already Exists")
    res.status==500&&toast.error('Internal Error')
  }
  const handleToastSignin=(res:AxiosResponse)=>{
    res.status==400&&toast.error('Invalid Credentials')
    res.status==404&&toast.error("User doesn't exist")
    res.status==500&&toast.error('Internal Error')
    if(res.status==200){
      toast.success("User Signin Successful")
      localStorage.setItem('token', JSON.stringify(res.data.token));
      navigate("/user")
    }
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <h1 className="absolute top-5 sm:top-10 border rounded-lg px-2 py-1">Demo Username: thearnabsaha , Password: Arnab@123 </h1>
      <Toaster position="top-right" reverseOrder={false} />
      <Tabs defaultValue="Signup" className="w-[400px] m-2">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Signup" className=" cursor-pointer">Sign Up</TabsTrigger>
          <TabsTrigger value="Signin" className=" cursor-pointer">Sign In</TabsTrigger>
        </TabsList>

        <TabsContent value="Signup">
          <Card className=" h-[450px]">
            <CardHeader>
              <CardTitle className="text-3xl">Sign Up</CardTitle>
              <CardDescription>
                Save, organize, and access your links anywhere, anytime.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Form {...Signupform}>
                <form onSubmit={Signupform.handleSubmit(onSubmitSignup)} className="space-y-8">
                  <FormField
                    control={Signupform.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Username" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={Signupform.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Email" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={Signupform.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Password" type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className=" cursor-pointer">Submit</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="Signin">
          <Card className=" h-[450px]">
            <CardHeader>
              <CardTitle className="text-3xl">Sign In</CardTitle>
              <CardDescription>
                Welcome back — access your saved links instantly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Form {...Signinform}>
                <form onSubmit={Signinform.handleSubmit(onSubmitSignin)} className="space-y-8">
                  <FormField
                    control={Signinform.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="username" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={Signinform.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Password" type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className=" cursor-pointer">Submit</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Credentials
