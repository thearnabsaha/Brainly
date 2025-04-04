import Sidebar from "./Sidebar"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-2 bg-accent items-center">
      <Sidebar/>
      <h1 className=" text-3xl">Your Links</h1>
      <div className="mr-10 flex items-center">
        <Button className="mx-1 rounded-sm cursor-pointer">Share</Button>
        <Button className="mx-1 rounded-sm mr-5 cursor-pointer">Add Content</Button>
        <ModeToggle/>
      </div>
    </div>
  )
}

export default Navbar