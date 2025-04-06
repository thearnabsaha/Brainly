import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MdOutlineContentCopy, MdOutlineDelete } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
interface dataInterface{
  _id:string,
  title:string,
  link:string,
  tags:string[],
  createdAt:string,
}
const Tweets = () => {
  const copyHandler=(link:string)=>{
    navigator.clipboard.writeText(link)
  }
    const navigate=useNavigate()
    const token=localStorage.getItem('token')
    const [data, setData] = useState<any>([])
    const deleteContent=(id:string)=>{
      if(!token){
        return;
      }
      axios.delete(`/api/content/${id}`,{headers:{token:JSON.parse(token)}})
      .then((res)=>console.log(res))
      .catch((res)=>console.log(res))
      window.location.reload(); 
    }
    useEffect(() => {
      if(!token){
        navigate("/signup")
        return;
      }
      axios.get("/api/content",{headers:{token:JSON.parse(token)}})
      .then((res)=>{
        setData([...res.data.contents])
      })
      .catch((res)=>console.log(res))
    }, [])
    const formatDate = (isoString: string): string => {
      const date = new Date(isoString);
      return date.toLocaleDateString("en-GB");
    };
    return (
      <div className="flex justify-start mt-5 w-[75vw] h-screen m-auto flex-wrap">
        {
          data.map((e:dataInterface)=>{
            const twitter=e.link.includes("twitter.com") || e.link.includes("x.com") 
            return(
                <div>
                    {
                        twitter&&              <Card className=" w-96 h-[480px] overflow-auto m-3" key={e._id}>
                        <CardHeader>
                          <CardTitle className="flex justify-around items-center">
                            <div className="flex">
                              {
                                twitter&&<FaTwitter  className="text-2xl mr-4 cursor-pointer"/>
                              }
                            </div>
                            <p className=" text-center p-1">{e.title}</p>
                            <div className="flex">
                                            <MdOutlineContentCopy className="text-2xl duration-500 ease-in-out cursor-pointer" onClick={()=>copyHandler(e.link)}/>
                            
                            <MdOutlineDelete className="text-2xl ml-2 cursor-pointer" onClick={()=>deleteContent(e._id)}/>
                            </div>
                            </CardTitle>
                          {
                              twitter&&<div className=" rounded-lg px-2">
                              <blockquote className="twitter-tweet">
                                  <a href={e.link.replace("x.com","twitter.com")}></a>
                                  </blockquote>
                              </div>
                          }
                        </CardHeader>
                        <CardContent>
                          {
                            e.tags.map((i)=>{
                              return(
                                <Badge className="m-2" key={e._id+i}>#{i}</Badge>
                              )
                            })
                          }
                        </CardContent>
                        <CardFooter>
                          <p>Added on {formatDate(e.createdAt)}</p>
                        </CardFooter>
                      </Card>
                    }
                </div>

              )
              })
              }
  </div>
    )
}

export default Tweets