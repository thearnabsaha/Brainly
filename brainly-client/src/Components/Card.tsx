import { HiOutlineShare} from "react-icons/hi";
import { SlSocialTwitter,SlSocialYoutube } from "react-icons/sl";
import { RiDeleteBinLine } from "react-icons/ri";

interface cardInterface{
    id:number,
    title:string,
    link:string,
    tags:string[],
    date:string
}


const Card = ({id,title,link,tags,date}:cardInterface) => {
    const twitter=link.includes("x.com") || link.includes("twitter.com") 
    const youtube=link.includes("youtube.com")
  return (
                    <div className=" bg-white w-80 h-fit overflow-auto rounded-lg">
                        <div className="flex justify-between items-center p-5">
                            <div>
                                {twitter&&<SlSocialTwitter fontSize={20} className=" text-pgrey-400 cursor-pointer"/>}
                                {youtube&&<SlSocialYoutube fontSize={20} className=" text-pgrey-400 cursor-pointer"/>}
                            </div>
                            <p className=" font-semibold text-xl pl-4">{title}</p>
                            <div className="flex gap-4">
                                <HiOutlineShare fontSize={20} className=" text-pgrey-400 cursor-pointer"/>
                                <RiDeleteBinLine fontSize={20} className=" text-pgrey-400 cursor-pointer"/>
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
                        <iframe className=" w-full h-60 px-5 pb-2 rounded-lg" width="560" height="315" src={link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
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