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