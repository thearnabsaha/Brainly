import { RecoilRoot } from "recoil";
import Dashboard from "./Pages/Dashboard"
import Layout from "./Pages/Layout";
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tweets from "./Components/Tweets";
import Videos from "./Components/Videos";
const App = () => {
  return (
    <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="videos" element={<Videos />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
  )
}

export default App