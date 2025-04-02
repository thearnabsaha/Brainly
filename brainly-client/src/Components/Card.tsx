import { HiOutlineShare} from "react-icons/hi";
import { SlSocialTwitter,SlSocialYoutube } from "react-icons/sl";
import { RiDeleteBinLine } from "react-icons/ri";
import { useSetRecoilState } from "recoil";
import { refreshAtom } from "../store/atoms";
import axios from "axios";

interface cardInterface{
    id:string,
    title:string,
    link:string,
    tags:string[],
    date:string
}

const token=localStorage.getItem("token")
const Card = ({id,title,link,tags,date}:cardInterface) => {
    const setRefresh=useSetRecoilState(refreshAtom)
    const twitter=link.includes("x.com") || link.includes("twitter.com") 
    const youtube=link.includes("youtube.com")
    function convertToEmbedUrl(youtubeUrl: string){
        const urlPattern = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
        const match = youtubeUrl.match(urlPattern);
        if (match && match[1]) {
            return `https://www.youtube.com/embed/${match[1]}?si=O8eFX0as4ErK1yu7`;
        }
        
    }
    const nlink=convertToEmbedUrl(link)
    const deleteHandler=(id:string)=>{
        if(!token){
            return
        }
        axios.delete(`/api/content/${id}`,{headers:{
            token:JSON.parse(token)
        }}).then((res)=>console.log(res)).catch((res)=>console.log(res))
        setRefresh(true)
      }
  return (
                    <div className=" bg-white w-80 h-[420px] overflow-auto rounded-lg">
                        <div className="flex justify-between items-center p-5">
                            <div>
                                {twitter&&<SlSocialTwitter fontSize={20} className=" text-pgrey-400 cursor-pointer"/>}
                                {youtube&&<SlSocialYoutube fontSize={20} className=" text-pgrey-400 cursor-pointer"/>}
                            </div>
                            <p className=" font-semibold text-xl pl-4">{title}</p>
                            <div className="flex gap-4">
                                <HiOutlineShare fontSize={20} className=" text-pgrey-400 cursor-pointer"/>
                                <RiDeleteBinLine fontSize={20} className=" text-pgrey-400 cursor-pointer" onClick={()=>deleteHandler(id)}/>
                            </div>
                        </div>
                        {
                            twitter&&<div className=" rounded-lg px-2">
                            <blockquote className="twitter-tweet">
                                <a href={link.replace("x.com","twitter.com")}></a>
                                </blockquote>
                            </div>
                        }
                        {
                            youtube&&<div className=" rounded-lg">
                        <iframe className=" w-full h-60 px-5 pb-2 rounded-lg" width="560" height="315" src={(nlink)} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                        }
                        {
                                 !youtube&&!twitter&&<a href={`${link}`} className=" text-ppurple-600 mx-4 inline-block my-2" target="_blank">Your Link</a>
                        }
                        {
                            !youtube&&!twitter&&<iframe src={`${link}`} className="w-full h-[250px]"></iframe>
                        }
                        <div className="flex flex-wrap">
                            {
                                tags.map((e)=>{
                                    return(
                                        <p className=" bg-purple-100 text-ppurple-600 rounded-xl px-2 py-1 mx-1 ml-5 my-1" key={id}>#{e}</p>
                                    )
                                })
                            }
                        </div>
                        <p className=" px-5 py-3 text-pgrey-400">Added on {date}</p>
                    </div>
  )
}

export default Card
