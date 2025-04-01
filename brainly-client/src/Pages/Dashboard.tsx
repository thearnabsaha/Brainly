import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
// const data = [
//   {
//     id: 1,
//     title: "How to Stay Productive",
//     link: "https://www.youtube.com/embed/BLUwJHXaK0A?si=dUTIZcDbZsgctIoB",
//     tags: ["productivity", "focus", "self-improvement", "arnab", "thearnabsaha"],
//     date: "2025-12-12"
//   },
//   {
//     id: 2,
//     title: "Latest Tech Trends",
//     link: "https://x.com/TheArnabSaha/status/1886386240431468953",
//     tags: ["technology", "innovation", "AI", "arnab", "thearnabsaha"],
//     date: "2025-12-12"
//   },
//   {
//     id: 3,
//     title: "Deep Work Techniques",
//     link: "https://www.youtube.com/watch?v=IhFtf2uHjFk",
//     tags: ["focus", "deep work", "self-discipline", "arnab", "thearnabsaha"],
//     date: "2025-12-12"
//   },
//   {
//     id: 4,
//     title: "Time Management Tips",
//     link: "https://twitter.com/TheArnabSaha/status/1886386240431468953",
//     tags: ["time management", "productivity", "self-improvement", "arnab", "thearnabsaha"],
//     date: "2025-12-12"
//   }
// ];
interface cardData {
  _id:string,
  title:string,
  link:string,
  createdAt:string,
  tags:string[]
}
const Dashboard = () => {
  const token=localStorage.getItem('token')
  const navigate=useNavigate()
  const [data, setData] = useState<cardData[]>([])
  const handleResponse=(res:AxiosResponse)=>{
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
  }, [token])
  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-GB");
  };
  return (
    <div className="w-screen h-screen bg-gray-200 flex relative">
        <Sidebar/>
        <div className="flex flex-col flex-1">
            <Navbar/>
            <div className="w-full bg-ppurple-100 h-full flex px-20 pt-10 gap-10 flex-wrap justify-center overflow-auto pb-16">
                {
                    data.map((e)=>{
                        console.log(e);
                        
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

export default Dashboard