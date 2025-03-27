import { ReactElement } from "react"

interface ButtonInterface{
    text:string,
    icon?:ReactElement,
    type:"primary"|"secondary",
    newClasses?:string,
    disabled?:boolean,
    click?:()=>void
}
const defaultStyles="px-6 py-2 rounded-md mx-2 flex items-center gap-2 hover:mix-blend-multiply"
const buttonTypeStyles={
    "primary":"bg-ppurple-600 text-pwhite",
    "secondary":"bg-ppurple-200 text-ppurple-600 ",
}
const Button = ({text,icon,type,newClasses,disabled,click}:ButtonInterface) => {
    return (
        <button className={`${defaultStyles} ${buttonTypeStyles[type]} ${newClasses}`} disabled={disabled} onClick={click}>{icon}{text}</button>
    )
}

export default Button