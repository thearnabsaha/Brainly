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
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios, {AxiosResponse } from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Credentials = () => {
  const [inputValue, setInputValue] = useState({username:"",password:"",email:""})
  const [inputValue2, setInputValue2] = useState({username:"",password:""})
  const token=localStorage.getItem('token')
  useEffect(() => {
    if(token){
      navigate('/user')
    }
  }, [token])
  const navigate=useNavigate()
  const handleToast=(res:AxiosResponse)=>{
    res.status==200&&toast.success('Signup Successful')
    res.status==400&&toast.error('Bad Resquest')
    res.status==404&&toast.error("Route doesn't exist Successful")
    res.status==409&&toast.error("User Already Exists")
    res.status==500&&toast.error('Internal Error')
    if(res.status==200){
      toast.success("User Signup Successful")
      localStorage.setItem('token', JSON.stringify(res.data.token));
      navigate("/user")
    }
  }
  const submitHandler=()=>{
    axios.post("api/signup",{...inputValue})
    .then((res)=>handleToast(res))
    .catch((res)=>handleToast(res))
    setInputValue({username:"",password:"",email:""})
  }
  const submitHandler2=()=>{
    axios.post("api/signin",{...inputValue2})
    .then(handleToast)
    .catch((res)=>handleToast(res))
    setInputValue2({username:"",password:""})
  }
  
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Toaster position="top-right" reverseOrder={false} />
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
              <Button onClick={submitHandler} disabled={!inputValue.username||!inputValue.email||!inputValue.password} className=" cursor-pointer">Sign Up</Button>
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
              <Button onClick={submitHandler2} disabled={!inputValue2.username||!inputValue2.password} className=" cursor-pointer">Sign Up</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Credentials
