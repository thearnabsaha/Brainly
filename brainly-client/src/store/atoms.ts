import { atom } from "recoil";
interface inputs{
  title: string
  link: string
  tags:string[]
}
export const inputValueState = atom({
    key: 'inputValue',
    default: <inputs>{title:"",link:"",tags:[]},
  });
export const tagsState = atom({
    key: 'tags',
    default: <string[]>[],
  });
    // const [inputValue, setInputValue] = useState<inputs>({title:"",link:"",tags:[]})
    // const [tagValue, setTagValue] = useState("")
    // const [tags, setTags] = useState<string[]>([])