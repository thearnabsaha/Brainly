import { ReactElement } from "react";
interface sidebarItemsInterface{
    text:string,
    icon:ReactElement,
    onclick?:()=>void
}
const SidebarItems = ({text,icon,onclick}:sidebarItemsInterface) => {
  return (
    <p className="flex items-center text-xl gap-2 mx-2 my-3 px-5 py-2 cursor-pointer hover:bg-purple-50 rounded-md" onClick={onclick}>{icon}{text}</p>
  )
}

export default SidebarItems