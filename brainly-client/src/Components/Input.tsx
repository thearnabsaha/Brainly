interface InputInterface{
  name:string,
  type:string,
  placeholder?:string,
  newclasses?:string,
  value:string,
  change:(e: React.ChangeEvent<HTMLInputElement>)=>void
}
const defaultStyles="p-2 rounded-md my-2 w-72 mx-10"
const Input = ({type,placeholder,newclasses,value,change,name}:InputInterface) => {
  return (
    <input name={name} type={type} placeholder={placeholder} className={`${defaultStyles} ${newclasses}`} value={value} onChange={change}/>
  )
}

export default Input