import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { z } from "zod"

const formSchema = z.object({
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

const Credentials = () => {
const [inputValue, setInputValue] = useState({username:"",password:"",email:""})
const [inputValue2, setInputValue2] = useState({username:"",password:""})
const navigate=useNavigate()
const submitHandler=()=>{
  console.log(inputValue)
  setInputValue({username:"",password:"",email:""})
}
const submitHandler2=()=>{
  console.log(inputValue2)
  setInputValue2({username:"",password:""})
  navigate('/user')
}
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Tabs defaultValue="Signup" className="w-[400px]">
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
              <Input type="text" placeholder="username" value={inputValue.username} onChange={(e)=>setInputValue({...inputValue,username:e.target.value})}/>
              <Input type="email" placeholder="email" value={inputValue.email} onChange={(e)=>setInputValue({...inputValue,email:e.target.value})}/>
              <Input type="password" placeholder="password" value={inputValue.password} onChange={(e)=>setInputValue({...inputValue,password:e.target.value})}/>
              <Button onClick={submitHandler} disabled={!inputValue.username||!inputValue.email||!inputValue.password}>Sign Up</Button>
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
              <Input type="text" placeholder="username" value={inputValue2.username} onChange={(e)=>setInputValue2({...inputValue2,username:e.target.value})}/>
              <Input type="password" placeholder="password" value={inputValue2.password} onChange={(e)=>setInputValue2({...inputValue2,password:e.target.value})}/>
              <Button onClick={submitHandler2} disabled={!inputValue2.username||!inputValue2.password}>Sign Up</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Credentials
