import { ReactElement } from "react";
interface sidebarItemsInterface{
    text:string,
    icon:ReactElement
}
const SidebarItems = ({text,icon}:sidebarItemsInterface) => {
  return (
    <p className="flex items-center text-xl gap-2 mx-2 my-3 px-5 py-2 cursor-pointer hover:bg-purple-50 rounded-md">{icon}{text}</p>
  )
}

export default SidebarItems