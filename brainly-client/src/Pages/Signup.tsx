import { Link } from "react-router-dom"
import Button from "../Components/Button"
import Input from "../Components/Input"
import React, { useState } from "react"

const Signup = () => {
  const [data, setData] = useState({
    username:"",
    email:"",
    password:""
  })
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(data)
    setData({username:"",email:"",password:""})
  }
  return (
    <div className="bg-purple-50 w-screen h-screen flex items-center justify-center">
        <div className="border bg-ppurple-200 rounded-lg">
            <h1 className="text-4xl text-center py-8">Sign Up</h1>
            <form onSubmit={handleSubmit} className=" flex flex-col pb-10 justify-center items-center">
                <Input type="text" placeholder="Username" value={data.username} change={handleChange} name="username"/>
                <Input type="email" placeholder="Email" value={data.email} change={handleChange} name="email"/>
                <Input type="password" placeholder="Password" value={data.password} change={handleChange} name="password"/>
                <Link to="signin" className="w-72 underline text-ppurple-600 text-right pr-5">Sign In</Link>
                <Button text="Sumbit" type="primary" newClasses="mt-2 w-72 justify-center" disabled={!(data.username&&data.email&&data.password)}/>
            </form>
        </div>
    </div>
  )
}

export default Signup