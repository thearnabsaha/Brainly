import React, { useState } from "react"
import Button from "../Components/Button"
import Input from "../Components/Input"
type AddContentProps = {
  isOpen: boolean;
  changeOpen: (open: boolean) => void;
};

const AddContent:React.FC<AddContentProps> = ({isOpen,changeOpen}) => {
  
  const [data, setData] = useState({title:"",link:""})
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(data.link+" "+data.title)
    setData({title:"",link:""})
    changeOpen(!isOpen)
  }
  const onClose=()=>{
    setData({title:"",link:""})
    changeOpen(!isOpen)
  }
  return (
    <div className={`w-screen h-screen bg-ppurple-600 absolute top-0 left-0 bg-opacity-50 flex justify-center items-center ${isOpen ? "block" : "hidden"}`} onClick={onClose}>
      <form onSubmit={handleSubmit} className="bg-white w-96 h-96 opacity-100 rounded-lg flex flex-col items-center" onClick={(e)=>{e.stopPropagation()}}>
        <h1 className=" text-center text-2xl my-2 mt-10">Add Content</h1>
        <Input type="text" name="title" placeholder="title" value={data.title} change={handleChange} newclasses="bg-ppurple-50"/>
        <Input type="text" name="link" placeholder="link" value={data.link} change={handleChange} newclasses="bg-ppurple-50"/>
        <Button text="Submit" type="primary" newClasses="w-72 mt-5 justify-center" disabled={!(data.title&&data.link)}/>
      </form>
    </div>
  )
}

export default AddContent