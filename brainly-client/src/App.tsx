import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/MainLayout";
import Creadentials from "./pages/Creadentials";
import Dashboard from "./pages/Dashboard";
import NoPage from "./pages/NoPage";
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="*" element={<NoPage />} />
          </Route>
            <Route path="signup" element={<Creadentials />} />
        </Routes>
      </BrowserRouter>
  </ThemeProvider>
  )
}

export default App