import { Link, useNavigate } from "react-router-dom"
import Button from "../Components/Button"
import Input from "../Components/Input"
import React, { useState } from "react"
import axios, { AxiosResponse } from "axios"
import toast, { Toaster } from "react-hot-toast"

const Signin = () => {
  const navigate=useNavigate()
  const [data, setData] = useState({
    username:"",
    password:""
  })
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleToast=(response:AxiosResponse)=>{
    response.status==404&&toast.error("User doesn't exists!!!")
    response.status==400&&toast.error("Invalid Credentials")
    if(response.status==200){
      toast.success("User Signup Successful")
      localStorage.setItem('token', JSON.stringify(response.data.token));
      navigate("/dashboard")
    }
  }
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    axios.post('/api/signin',{...data})
    .then((res)=>handleToast(res))
    .catch((res)=>handleToast(res))
    setData({username:"",password:""})
  }
  return (
    <div className="bg-purple-50 w-screen h-screen flex items-center justify-center">
      <Toaster   position="top-right" reverseOrder={false}/>
    <div className="border bg-ppurple-200 rounded-lg">
        <h1 className="text-4xl text-center py-8">Sign In</h1>
        <form onSubmit={handleSubmit} className=" flex flex-col pb-10 justify-center items-center">
            <Input type="text" placeholder="Username" name="username" value={data.username} change={handleChange}/>
            <Input type="password" placeholder="Password" name="password" value={data.password} change={handleChange}/>
            <div className="w-72 text-right">
              <Link to="/" className="underline text-ppurple-600 hover:text-ppurple-400 pr-5">Sign In</Link>
            </div>
            <Button text="Sumbit" type="primary" newClasses="mt-2 w-72 justify-center" disabled={!(data.username&&data.password)}/>
        </form>
    </div>
</div>
  )
}

export default Signin