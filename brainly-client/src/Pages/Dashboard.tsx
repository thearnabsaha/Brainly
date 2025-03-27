import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Card from "../Components/Card";
const data = [
  {
    id: 1,
    title: "How to Stay Productive",
    link: "https://www.youtube.com/embed/BLUwJHXaK0A?si=dUTIZcDbZsgctIoB",
    tags: ["productivity", "focus", "self-improvement", "arnab", "thearnabsaha"],
    date: "2025-12-12"
  },
  {
    id: 2,
    title: "Latest Tech Trends",
    link: "https://x.com/TheArnabSaha/status/1886386240431468953",
    tags: ["technology", "innovation", "AI", "arnab", "thearnabsaha"],
    date: "2025-12-12"
  },
  {
    id: 3,
    title: "Deep Work Techniques",
    link: "https://www.youtube.com/watch?v=IhFtf2uHjFk",
    tags: ["focus", "deep work", "self-discipline", "arnab", "thearnabsaha"],
    date: "2025-12-12"
  },
  {
    id: 4,
    title: "Time Management Tips",
    link: "https://twitter.com/TheArnabSaha/status/1886386240431468953",
    tags: ["time management", "productivity", "self-improvement", "arnab", "thearnabsaha"],
    date: "2025-12-12"
  }
];

const Dashboard = () => {
  return (
    <div className="w-screen h-screen bg-gray-200 flex relative">
        <Sidebar/>
        <div className="flex flex-col flex-1">
            <Navbar/>
            <div className="w-full bg-ppurple-100 h-full flex px-20 pt-10 gap-10 flex-wrap justify-center overflow-auto pb-16">
                {
                    data.map((e)=>{
                        return(
                          <Card title={e.title} link={e.link} date={e.date} tags={e.tags} id={e.id}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Dashboard