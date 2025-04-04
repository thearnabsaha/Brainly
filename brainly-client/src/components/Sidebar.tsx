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
const items = [
    {
      title: "Dashboard",
      url: "/user/dashboard",
      icon: LuLayoutGrid,
    },
    {
      title: "Videos",
      url: "/user/videos",
      icon: FaYoutube,
    },
    {
      title: "Tweets",
      url: "/user/tweets",
      icon: FaTwitter,
    },
    {
      title: "Logout",
      url: "/signup",
      icon: IoIosLogOut,
    },
  ]
  
const Sidebar = () => {
    const navigate=useNavigate()
  return (
    <div>
      <Sheet>
        <SheetTrigger className=" cursor-pointer">
          <Menu/>
        </SheetTrigger>
        <SheetContent side="left">
            <h1 className="flex items-center text-3xl py-10 mx-1"><LuBrain className="text-[50px] mx-2"/>Brainly</h1>
            {
                items.map((e)=>{
                    return(
                        <h1 key={e.title} onClick={()=>navigate(`${e.url}`)} className="flex hover:bg-accent py-2 cursor-pointer"><e.icon className=" mx-5 text-3xl"/>{e.title}</h1>
                    )
                })
            }
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Sidebar
