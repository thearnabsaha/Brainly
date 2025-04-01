import { Link } from "react-router-dom"
import Button from "../Components/Button"
import Input from "../Components/Input"
import React, { useState } from "react"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
  const [data, setData] = useState({
    username:"",
    email:"",
    password:""
  })
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleToast = (response:any) => {
    response.status==409?toast.error("User already exists!!!"):null
    response.status==400?toast.error("Give Valid Email and Password should contains 1 Uppercase 1 number and 1 special charecter minimum"):null
    response.status==200?toast.success("User Signup Successful"):null
  }
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    axios.post('api/signup', {    
      ...data
    })
    .then((response)=>handleToast(response))
    .catch((response)=>handleToast(response));
    setData({
      username:"",
      email:"",
      password:""
    })
  }
  return (
    <div className="bg-purple-50 w-screen h-screen flex items-center justify-center">
              <Toaster   position="top-right" reverseOrder={false}/>
        <div className="border bg-ppurple-200 rounded-lg">
            <h1 className="text-4xl text-center py-8">Sign Up</h1>
            <form onSubmit={handleSubmit} className=" flex flex-col pb-10 justify-center items-center">
                <Input type="text" placeholder="Username" value={data.username} change={handleChange} name="username"/>
                <Input type="email" placeholder="Email" value={data.email} change={handleChange} name="email"/>
                <Input type="password" placeholder="Password" value={data.password} change={handleChange} name="password"/>
                <div className="w-72 text-right">
                  <Link to="signin" className="underline text-ppurple-600 pr-5 hover:text-ppurple-400">Sign In</Link>
                </div>
                <Button text="Sumbit" type="primary" newClasses="mt-2 w-72 justify-center" disabled={!(data.username&&data.email&&data.password)}/>
            </form>
        </div>
    </div>
  )
}

export default Signup