import { useState } from "react"
interface tagsInterface{
    tags:string[],
    setTags:(tags: string[])=>void
}
const TagsInput = ({tags,setTags}:tagsInterface) => {
    const [inputValue, setInputValue] = useState("")
    const handleKeydown=(e: React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==='Enter'&& inputValue.trim()){
            e.preventDefault()
            setTags([...tags,inputValue.trim()])
            setInputValue("")
        }
    }
    const handleCross=(e: React.MouseEvent<HTMLButtonElement>,index:number)=>{
        e.preventDefault()
        setTags(tags.filter((_e,i)=>i!==index))
    }
  return (
      <div>
        <div className=" rounded-md my-2 w-72 mx-10 overflow-auto h-20 flex flex-wrap">
            {
                tags.map((e,index)=>{
                    return(
                        <span key={index} className=" bg-ppurple-200 p-2 rounded-lg text-ppurple-600 m-2 h-10 flex items-center">{e}<button className="p-2 text-red-600 hover:text-red-800" onClick={(e)=>handleCross(e,index)}>x</button></span>
                    )
                })
            }
        </div>

        <input type="text" name="tags" placeholder="tags" className="bg-ppurple-50 p-2 rounded-md my-2 w-72 mx-10" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} onKeyDown={handleKeydown}/>
    </div>
  )
}

export default TagsInput