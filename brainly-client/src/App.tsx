import { ThemeProvider } from "@/components/ui/theme/theme-provider"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/MainLayout";
import Creadentials from "./pages/Creadentials";
import Dashboard from "./pages/Dashboard";
import NoPage from "./pages/NoPage";
import Videos from "./pages/Videos";
import Tweets from "./pages/Tweets";
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="*" element={<NoPage />} />
            <Route path="videos" element={<Videos />} />
            <Route path="tweets" element={<Tweets />} />
          </Route>
            <Route path="/" element={<Creadentials />} />
            <Route path="signup" element={<Creadentials />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  </ThemeProvider>
  )
}

export default App