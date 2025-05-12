import { Card } from "@/components/ui/card"
import axios from "axios"
import { useEffect, useState } from "react"

const Profile = () => {
    const [user, setUser] = useState<{ username?: string; email?: string; posts?: string }>({})
    const token = localStorage.getItem('token')
    useEffect(() => {
        if (!token) {
            return;
        }
        axios.get("/api/user", { headers: { token: JSON.parse(token) } })
            .then((e) => { setUser(e.data) })
            .catch((res) => console.log(res))
    }, [])

    return (
        <div className="flex justify-center items-center h-[90vh]">
            <Card className="px-6">
                <h1>Username : {user.username}</h1>
                <h1>Email : {user.email}</h1>
                <h1>Total Saved Posts : {user.posts}</h1>
            </Card>
        </div>
    )
}

export default Profile