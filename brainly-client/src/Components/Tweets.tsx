import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { refreshAtom } from "../store/atoms";
interface cardData {
  _id:string,
  title:string,
  link:string,
  createdAt:string,
  tags:string[]
}
const Tweets = () => {
  const token=localStorage.getItem('token')
  const navigate=useNavigate()
  const [data, setData] = useState<cardData[]>([])
  const refresh = useRecoilValue(refreshAtom);
  const setRefresh = useSetRecoilState(refreshAtom);
  const handleResponse=(res:AxiosResponse)=>{
    // res.data.contents.filter((e:any)=>console.log(e.link.includes("x.com") || e.link.includes("twitter.com") ))
    // console.log(res.data.contents);
    

    setData(res.data.contents)
  }
  useEffect(() => {
    if(!token){
      navigate('/')
      return;
    }
    axios.get("/api/content",{
      headers:{
        token:JSON.parse(token)
      }
    })
    .then((res)=>handleResponse(res))
    .catch((res)=>console.log(res))
    setRefresh(false)
  }, [token,refresh])
  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-GB");
  };
  let tweets:cardData[]=[]
  data.filter((e)=>{
    if(e.link.includes("x.com") || e.link.includes("twitter.com")){
        tweets.push(e)
    }
    console.log(tweets);
    return tweets
  })

  return (
    <div className="w-screen h-screen bg-gray-200 flex relative">
        <Sidebar/>
        <div className="flex flex-col flex-1">
            <Navbar/>
            <div className="w-full bg-ppurple-100 h-full flex px-20 pt-10 gap-10 flex-wrap justify-center overflow-auto pb-16">
                {
                    tweets.map((e)=>{
                        return(
                          <Card title={e.title} link={e.link} date={formatDate(e.createdAt)} tags={e.tags} id={e._id} key={e._id}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Tweets