import Sidebar from "./Sidebar"
import { Button } from "./ui/button"
import { ModeToggle } from "./ui/theme/mode-toggle"
import { DialogHeader,Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog"
import { MdOutlineContentCopy } from "react-icons/md";
import { Input } from "./ui/input"
import { useEffect, useState } from "react"
import { Badge } from "./ui/badge"
import { inputValueState, tagsState } from "@/store/atoms"
import { useRecoilState } from "recoil"
import axios from "axios"
import { FaCheck } from "react-icons/fa6";
import { Switch } from "./ui/switch";
const API_BASE = import.meta.env.VITE_API_BASE;

const Navbar = () => {
  const [inputValue, setInputValue] = useRecoilState(inputValueState);
  const [tags, setTags] = useRecoilState(tagsState);
  const [tagValue, setTagValue] = useState("")
  const [copied, setCopied] = useState(false)
  const [sharedLink, setSharedLink] = useState('')
  const [sharable, setSharable] = useState(false)
  const token=localStorage.getItem('token')
  useEffect(() => {
    axios.get(`${API_BASE}/shareon`,{headers:{token:JSON.parse(token as string)}})
    .then((res)=>{
      setSharable(res.data.isSharing)
      setSharedLink(`${window.location.origin}/share/`+res.data.slug)
    })
  }, [])
  
  if(!token){
    return
  }
  const submithandler=()=>{
    if(tagValue){
      const newtags=[...tags,tagValue.trim()]
      setTags(newtags)
      setInputValue({...inputValue,tags:newtags})
      setTagValue("")
    }
    axios.post(`${API_BASE}/content`,{...inputValue},{headers:{token:JSON.parse(token)}})
    .then()
    .catch((res)=>console.log(res))  
    setInputValue({title:"",link:"",tags:[]})
    setTags([])
    window.location.reload(); 
  }
  const handleTags=(e: React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key==="Enter"){
      if(tagValue){
        const newtags=[...tags,tagValue.trim()]
        setTags(newtags)
        setInputValue({...inputValue,tags:newtags})
        setTagValue("")
      }
    }
  }
  const handleFilterTags=(e:string)=>{
    const newtags=tags.filter((i)=>i!==e)
    setTags(newtags)
    setInputValue({...inputValue,tags:newtags})
  }
  const copyHandler=()=>{
    navigator.clipboard.writeText(sharedLink)
    setTimeout(() => {
      setCopied(false)
    }, 2000);
    setCopied(true)
  }
  const checkedChangedHandler=()=>{
    if(!sharable){
      axios.post(`${API_BASE}/shareon`,{},{headers:{token:JSON.parse(token)}})
      .then((res)=>{
        setSharedLink(`${window.location.origin}/share/`+res.data.slug)
        setSharable(res.data.isSharing)
      })
      .catch((res)=>console.log(res));
    }else{
        axios.post(`${API_BASE}/shareoff`,{},{headers:{token:JSON.parse(token)}})
        .then((res)=>{
          setSharedLink("")
          setSharable(res.data.isSharing)
        })
        .catch((res)=>console.log(res));
    }
  }
  return (
    <div className="flex justify-between px-10 py-5 items-center">
      <Sidebar/>
      <div className="mr-10 flex items-center">
        <Dialog>
          <DialogTrigger>
            <Button className="mx-1 rounded-sm cursor-pointer">Share</Button>
          </DialogTrigger>
          <DialogContent className="p-2 sm:p-6">
            <DialogHeader>
              <DialogTitle className="text-3xl">Your Sharable Link</DialogTitle>
              <DialogDescription>
              <h1 className="flex items-center justify-center sm:justify-start">Do You Want to Share all Your Links<Switch onCheckedChange={checkedChangedHandler} className="ml-5  cursor-pointer" checked={sharable}/></h1>
                {sharable&&<div className=" flex justify-between my-5 items-center flex-col sm:flex-row">
                  <h1 className=" border py-3 px-10 bg-accent my-5 rounded-sm overflow-x-hidden sm:w-96 w-full break-words">{sharedLink}</h1>
                <Button className=" cursor-pointer" onClick={copyHandler}>{copied?<FaCheck className="text-2xl duration-500 ease-in-out"/>:<MdOutlineContentCopy className="text-2xl duration-500 ease-in-out"/>}</Button>
                  </div>}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
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
                  <div className="h-[300px] border my-4 overflow-x-hidden sm:w-[470px] overflow-y-scroll">
                    {tags.map((e,i)=>{
                      return(
                        <Badge className="m-2" key={e+i}>{e} <span className="text-accent text-lg" onClick={()=>handleFilterTags(e)}>x</span> </Badge>
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