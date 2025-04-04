import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const Creadentials = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
        <Tabs defaultValue="Signup" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Signup" className=" cursor-pointer">Sign Up</TabsTrigger>
        <TabsTrigger value="Signin" className=" cursor-pointer">Sign In</TabsTrigger>
      </TabsList>
      <TabsContent value="Signup">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Sign Up</CardTitle>
            <CardDescription>
            Save, organize, and access your links anywhere, anytime.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            
          </CardContent>
          <CardFooter>
            <Button>Sign In</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Signin">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Sign In</CardTitle>
            <CardDescription>
            Welcome back — access your saved links instantly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">

          </CardContent>
          <CardFooter>
            <Button>Sign Up</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}

export default Creadentials