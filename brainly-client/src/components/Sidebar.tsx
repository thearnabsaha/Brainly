import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LuLayoutGrid,LuBrain } from "react-icons/lu";
import { FaYoutube,FaTwitter } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom"
const Sidebar = () => {
    const navigate=useNavigate()
    const onclickhandler=()=>{
      navigate('/signup')
      localStorage.removeItem('token')
    }
    const onclickhandler2=()=>{
      navigate('/user/tweets')
      window.location.reload(); 
    }
    const onclickhandler3=()=>{
      navigate('/user')
      window.location.reload(); 
    }
  return (
    <div>
      <Sheet>
        <SheetTrigger className=" cursor-pointer">
          <Menu/>
        </SheetTrigger>
        <SheetContent side="left">
            <h1 className="flex items-center text-3xl py-10 mx-1"><LuBrain className="text-[50px] mx-2"/>Brainly</h1>
            <h1 onClick={onclickhandler3} className="flex hover:bg-accent py-2 cursor-pointer"><LuLayoutGrid className=" mx-5 text-3xl"/>Dashboard</h1>
            <h1 onClick={()=>navigate("/user/videos")} className="flex hover:bg-accent py-2 cursor-pointer"><FaYoutube className=" mx-5 text-3xl"/>Videos</h1>
            <h1 onClick={onclickhandler2} className="flex hover:bg-accent py-2 cursor-pointer"><FaTwitter className=" mx-5 text-3xl"/>Tweets</h1>
            <h1 onClick={onclickhandler} className="flex hover:bg-accent py-2 cursor-pointer"><IoIosLogOut className=" mx-5 text-3xl"/>Logout</h1>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Sidebar
