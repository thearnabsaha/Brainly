import Dashboard from "./Pages/Dashboard"
import Layout from "./Pages/Layout";
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App