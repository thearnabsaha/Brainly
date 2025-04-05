import Sidebar from "./Sidebar"
import { Button } from "./ui/button"
import { ModeToggle } from "./ui/theme/mode-toggle"
import { DialogHeader,Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { useState } from "react"
import { Badge } from "./ui/badge"
import { inputValueState, tagsState } from "@/store/atoms"
import { useRecoilState } from "recoil"
// interface inputs{
//   title: string
//   link: string
//   tags:string[]
// }
const Navbar = () => {
  const [inputValue, setInputValue] = useRecoilState(inputValueState);
  const [tags, setTags] = useRecoilState(tagsState);
  const [tagValue, setTagValue] = useState("")
  const submithandler=()=>{
    console.log(inputValue);
    setInputValue({title:"",link:"",tags:[]})
    setTags([])
  }
  const handleTags=(e: React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key==="Enter"){
      tagValue&&setTags([...tags,tagValue])
      setInputValue({...inputValue,tags:tags})
      setTagValue("")
    }
  }
  return (
    <div className="flex justify-between px-10 py-2 bg-accent items-center">
      <Sidebar/>
      <div className="mr-10 flex items-center">
        <Button className="mx-1 rounded-sm cursor-pointer">Share</Button>
        <Dialog>
          <DialogTrigger>
            <Button className="mx-1 rounded-sm mr-5 cursor-pointer">Add Content</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-3xl">Add Content</DialogTitle>
              <DialogDescription>
                  <Input placeholder="Title" type="text" className="my-4" value={inputValue.title} onChange={(e)=>setInputValue({...inputValue,title:e.target.value})}/>
                  <Input placeholder="Link" type="text" value={inputValue.link} onChange={(e)=>setInputValue({...inputValue,link:e.target.value})}/>
                  <div className="h-[300px] border my-4 overflow-x-hidden w-[470px] overflow-y-scroll">
                    {tags.map((e)=>{
                      return(
                        <Badge className="m-2">{e} <span className="text-red-500 text-lg" onClick={()=>setTags(tags.filter((i)=>i!==e))}>x</span> </Badge>
                      )
                    })}
                  </div>
                  <Input placeholder="tags" type="text" value={tagValue} onKeyDown={handleTags} onChange={(e)=>{setTagValue(e.target.value)}}/>
                  <Button className="mt-2 cursor-pointer rounded-sm" onClick={submithandler} disabled={!inputValue.title||!inputValue.link}>Add Link</Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <ModeToggle/>
      </div>
    </div>
  )
}

export default Navbar