import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MdOutlineDelete } from "react-icons/md";
import { GoShareAndroid } from "react-icons/go";
import { FaYoutube,FaTwitter } from "react-icons/fa";
import { HiOutlineDocument } from "react-icons/hi";
// import { useEffect, useState } from "react";

const data = [
  {
    title: "Elon Musk talks AI and the future",
    link: "https://x.com/nirbhay_74/status/1907712493612331346",
    tags: ["AI", "technology", "Elon Musk", "future"],
    date: "2025-03-15"
  },
  {
    title: "MrBeast - Giving Away $1,000,000!",
    link: "https://www.youtube.com/watch?v=xUNqsfFUwhY",
    tags: ["YouTube", "MrBeast", "giveaway", "viral"],
    date: "2025-03-10"
  },
  {
    title: "Naval Ravikant on wealth and happiness",
    link: "https://x.com/nirbhay_74/status/1907712493612331346",
    tags: ["Naval", "philosophy", "wealth", "mindset"],
    date: "2025-03-05"
  },
  {
    title: "Ali Abdaal - How to Study for Exams",
    link: "https://www.youtube.com/watch?v=ukLnPbIffxE",
    tags: ["study", "productivity", "Ali Abdaal", "tips"],
    date: "2025-02-28"
  },
  {
    title: "Grevelops Website",
    link: "https://grevelops.co",
    tags: ["study", "productivity", "Ali Abdaal", "tips"],
    date: "2025-02-28"
  }
];



const Dashboard = () => {
  // const [data, setdata] = useState([{title:"",link:"",tags:[],date:""}])
  useEffect(() => {
    
  }, [])
  return (
    <div className="flex justify-start mt-5 w-[75vw] h-screen m-auto flex-wrap">
      {
        data.map((e)=>{
          const youtube=e.link.includes("youtube.com")
          const twitter=e.link.includes("twitter.com") || e.link.includes("x.com") 
          function convertToEmbedUrl(youtubeUrl: string){
            const urlPattern = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
            const match = youtubeUrl.match(urlPattern);
            if (match && match[1]) {
              return `https://www.youtube.com/embed/${match[1]}?si=O8eFX0as4ErK1yu7`;
            }
            
          }
          const nlink=convertToEmbedUrl(e.link)
          console.log(e.link.replace("x.com","twitter.com"))
          return(
            <Card className=" w-96 h-[480px] overflow-auto m-3">
              <CardHeader>
                <CardTitle className="flex justify-around items-center">
                  <div className="flex">
                    {
                      youtube&&<FaYoutube className="text-2xl mr-4 cursor-pointer"/>
                    }
                    {
                      twitter&&<FaTwitter  className="text-2xl mr-4 cursor-pointer"/>
                    }
                    {
                      !youtube&&!twitter&&<HiOutlineDocument  className="text-2xl mr-4 cursor-pointer"/>
                    }
                  </div>
                  <p className=" text-center p-1">{e.title}</p>
                  <div className="flex">
                  <GoShareAndroid className="text-2xl mr-2 cursor-pointer"/> <MdOutlineDelete className="text-2xl ml-2 cursor-pointer"/>
                  </div>
                  </CardTitle>
                {
                    twitter&&<div className=" rounded-lg px-2">
                    <blockquote className="twitter-tweet">
                        <a href={e.link.replace("x.com","twitter.com")}></a>
                        </blockquote>
                    </div>
                }
                {
                    youtube&&<div className=" rounded-lg">
                <iframe className=" w-full h-60 px-5 pb-2 rounded-lg" width="560" height="315" src={(nlink)} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                }
                {
                    !youtube&&!twitter&&<a href={`${e.link}`} className=" mx-4 inline-block my-2 underline text-primary" target="_blank">Your Link</a>
                }
                {
                    !youtube&&!twitter&&<iframe src={`${e.link}`} className="w-full h-[250px]"></iframe>
                }
              </CardHeader>
              <CardContent>
                {
                  e.tags.map((e)=>{
                    return(
                      <Badge className="m-2">#{e}</Badge>
                    )
                  })
                }
              </CardContent>
              <CardFooter>
                <p>Added on {e.date}</p>
              </CardFooter>
            </Card>

            )
            })
            }
</div>
  )
}

export default Dashboard