import { LuBrain } from "react-icons/lu";
import {HiHashtag,HiLink} from "react-icons/hi";
import { SlSocialTwitter,SlSocialYoutube } from "react-icons/sl";
import SidebarItems from "../Components/SidebarItems";
const Sidebar = () => {
  return (
    <div className="w-72 bg-white h-screen pt-5">
            <h1 className="text-3xl flex font-bold p-5 gap-2"><LuBrain fontSize={40} className="text-ppurple-600"/>Brainly</h1>
            <div className=" mt-5">
                <SidebarItems text="Tweets" icon={<SlSocialTwitter/>}/>
                <SidebarItems text="Videos" icon={<SlSocialYoutube/>}/>
                {/* <SidebarItems text="Documents" icon={<HiOutlineDocumentText/>}/> */}
                <SidebarItems text="Links" icon={<HiLink/>}/>
                <SidebarItems text="Tags" icon={<HiHashtag/>}/>
            </div>
        </div>
  )
}

export default Sidebar