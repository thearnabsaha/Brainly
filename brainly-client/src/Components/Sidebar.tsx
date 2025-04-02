import { LuBrain } from "react-icons/lu";
import {HiHashtag,HiLink, HiOutlineDocumentText} from "react-icons/hi";
import { SlSocialTwitter,SlSocialYoutube } from "react-icons/sl";
import SidebarItems from "../Components/SidebarItems";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate=useNavigate()
  return (
    <div className="w-72 bg-white h-screen pt-5">
            <h1 className="text-3xl flex font-bold p-5 gap-2"><LuBrain fontSize={40} className="text-ppurple-600"/>Brainly</h1>
            <div className=" mt-5">
                <SidebarItems text="Dashboard" icon={<HiOutlineDocumentText/>} onclick={()=>navigate("/dashboard")}/>
                <SidebarItems text="Tweets" icon={<SlSocialTwitter/>} onclick={()=>navigate("/tweets")}/>
                <SidebarItems text="Videos" icon={<SlSocialYoutube/>} onclick={()=>navigate("/videos")}/>
                {/* <SidebarItems text="Links" icon={<HiLink/>}/> */}
                <SidebarItems text="Tags" icon={<HiHashtag/>}/>
            </div>
        </div>
  )
}

export default Sidebar