import Sidebar from "./Sidebar"
import { Button } from "./ui/button"
import { ModeToggle } from "./ui/theme/mode-toggle"
import { DialogHeader,Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "@radix-ui/react-alert-dialog"
import { AlertDialogFooter, AlertDialogHeader } from "./ui/alert-dialog"

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-2 bg-accent items-center">
      <Sidebar/>
      <h1 className=" text-3xl">Your Links</h1>
      <div className="mr-10 flex items-center">
        <Button className="mx-1 rounded-sm cursor-pointer">Share</Button>
        <Dialog>
          <DialogTrigger>
            <Button className="mx-1 rounded-sm mr-5 cursor-pointer">Add Content</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Content</DialogTitle>
              <DialogDescription>
                <Input placeholder="Title" type="text"/>
                <Input placeholder="link" type="text"/>
                <Input placeholder="tags" type="text"/>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <ModeToggle/>
      </div>

    </div>
  )
}

export default Navbar