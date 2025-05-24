import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MdOutlineContentCopy, MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { FaYoutube,  FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DialogHeader, Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useRecoilState } from "recoil";
import { inputValueState, tagsState } from "@/store/atoms";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const API_BASE = import.meta.env.VITE_API_BASE;

interface dataInterface {
  _id: string,
  title: string,
  link: string,
  tags: string[],
  createdAt: string,
}
const Youtube = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [data, setData] = useState<dataInterface[]>([])
  const [copied, setCopied] = useState(false)
  const [copyId, setCopyId] = useState("")
  const [inputValue, setInputValue] = useRecoilState(inputValueState);
  const [tags, setTags] = useRecoilState(tagsState);
  const [tagValue, setTagValue] = useState("")
  const copyHandler = (link: string, id: string) => {
    setCopyId(id)
    navigator.clipboard.writeText(link)
    setTimeout(() => {
      setCopied(false)
    }, 2000);
    setCopied(true)
  }
  const deleteContent = (id: string) => {
    if (!token) {
      return;
    }
    axios.delete(`${API_BASE}/content/${id}`, { headers: { token: JSON.parse(token) } })
      .then((res) => console.log(res))
      .catch((res) => console.log(res))
    window.location.reload();
  }
    const editValuesHandler = (id: string) => {
    if (!token) {
      return;
    }
    axios.get(`${API_BASE}/content/${id}`, { headers: { token: JSON.parse(token) } })
      .then((res) => {
        setInputValue({title:res.data.content.title,link:res.data.content.link,tags:[...res.data.content.tags]})
        setTags([...res.data.content.tags])
      })
      .catch((res) => console.log(res))
  }
  useEffect(() => {
    if (!token) {
      navigate('/')
      return;
    }
    axios.get(`${API_BASE}/content`, { headers: { token: JSON.parse(token) } })
      .then((res) => {
        setData([...res.data.contents])
      })
      .catch((res) => console.log(res))
  }, [token])
  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-GB");
  };
  if (!token) {
    return
  }
  const submithandler = (id: string) => {
    if (tagValue) {
      const newtags = [...tags, tagValue.trim()]
      setTags(newtags)
      setInputValue({ ...inputValue, tags: newtags })
      setTagValue("")
    }
    axios.put(`${API_BASE}/content/${id}`, { ...inputValue }, { headers: { token: JSON.parse(token) } })
      .then((res)=>console.log(res))
      .catch((res) => console.log(res))
    setInputValue({ title: "", link: "", tags: [] })
    setTags([])
    window.location.reload();
  }
  const handleTags = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (tagValue) {
        const newtags = [...tags, tagValue.trim()]
        setTags(newtags)
        setInputValue({ ...inputValue, tags: newtags })
        setTagValue("")
      }
    }
  }
  const handleFilterTags = (e: string) => {
    const newtags = tags.filter((i) => i !== e)
    setTags(newtags)
    setInputValue({ ...inputValue, tags: newtags })
  }
  return (
    <div className="flex justify-start mt-5 lg:w-[80vw] md:w-[90vw] mb-5 m-auto flex-wrap">
      {
        data.map((e: dataInterface) => {
          const youtube = e.link.includes("youtube.com")
          function convertToEmbedUrl(youtubeUrl: string) {
            const urlPattern = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
            const match = youtubeUrl.match(urlPattern);
            if (match && match[1]) {
              return `https://www.youtube.com/embed/${match[1]}?si=O8eFX0as4ErK1yu7`;
            }

          }
          const nlink = convertToEmbedUrl(e.link)
          return (
            youtube&&<Card className=" md:w-96 w-full h-[480px] overflow-auto m-3" key={e._id}>
              <CardHeader>
                <CardTitle className="flex justify-around items-center">
                  <div className="flex">
                    {
                      youtube && <FaYoutube className="text-2xl mr-4 cursor-pointer" />
                    }
                  </div>
                  <p className=" text-center p-1">{e.title}</p>
                  <div className="flex">
                    {copied && copyId == e._id ? <FaCheck className="text-2xl duration-500 ease-in-out" /> : <MdOutlineContentCopy className="text-2xl duration-500 ease-in-out cursor-pointer" onClick={() => copyHandler(e.link, e._id)} />}

                    <Dialog>
                      <DialogTrigger onClick={()=>editValuesHandler(e._id)}>
                        <MdOutlineEdit className="text-2xl ml-2 cursor-pointer"/>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="text-3xl">Edit Content</DialogTitle>
                          <DialogDescription>
                            <Input placeholder="Title" type="text" className="my-4" value={inputValue.title} onChange={(e) => setInputValue({ ...inputValue, title: e.target.value })} />
                            <Input placeholder="Link" type="text" value={inputValue.link} onChange={(e) => setInputValue({ ...inputValue, link: e.target.value })} />
                            <div className="h-[300px] border my-4 overflow-x-hidden sm:w-[470px] overflow-y-scroll">
                              {tags.map((e,i) => {
                                return (
                                  <Badge className="m-2" key={e+i}>{e} <span className="text-accent text-lg" onClick={() => handleFilterTags(e)}>x</span> </Badge>
                                )
                              })}
                            </div>
                            <Input placeholder="tags" type="text" value={tagValue} onKeyDown={handleTags} onChange={(e) => { setTagValue(e.target.value) }} />
                            <Button className="mt-2 cursor-pointer rounded-sm" onClick={()=>submithandler(e._id)} disabled={!inputValue.title || !inputValue.link}>Update Link</Button>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    <MdOutlineDelete className="text-2xl ml-2 cursor-pointer" onClick={() => deleteContent(e._id)} />
                  </div>
                </CardTitle>
                
                {
                  youtube && <div className=" rounded-lg">
                    <iframe className=" w-full h-60 px-5 pb-2 rounded-lg mt-5" width="560" height="315" src={(nlink)} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  </div>
                }
                
              </CardHeader>
              <CardContent>
                {
                  e.tags.map((i) => {
                    return (
                      <Badge className="m-2" key={e._id + i}>#{i}</Badge>
                    )
                  })
                }
              </CardContent>
              <CardFooter>
                <p>Added on {formatDate(e.createdAt)}</p>
              </CardFooter>
            </Card>
          )
        })
      }
    </div>
  )
}

export default Youtube