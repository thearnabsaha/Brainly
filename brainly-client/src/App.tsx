import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Creadentials from "./pages/Creadentials";
import Dashboard from "./pages/Dashboard";
import NoPage from "./pages/NoPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
          <Route path="signup" element={<Creadentials />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App