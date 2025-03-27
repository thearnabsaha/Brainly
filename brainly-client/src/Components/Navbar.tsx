import { HiPlus,HiOutlineShare} from "react-icons/hi";
import Button from "../Components/Button";
import AddContent from "../Pages/AddContent";
import { useState } from "react";
const Navbar = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="bg-pgrey-50 w-full h-20 flex justify-between items-center px-20 ">
      <AddContent isOpen={openModal} changeOpen={setOpenModal}/>
    <h1 className=" text-3xl">All Notes</h1>
    <div className="flex">
        <Button text="Share" type="secondary" icon={<HiOutlineShare fontSize={20}/>}/>
        <Button text="Add Content" type="primary" icon={<HiPlus fontSize={20}/>} click={()=>{setOpenModal(true)}}/>
    </div>
</div>
  )
}

export default Navbar