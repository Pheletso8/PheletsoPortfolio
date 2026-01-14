import Homepage from "./Pages/Homepage"
import Layout from './MainLayout/Layout'
import ProjectBlog from "./Pages/ProjectBlog"
import { Route, Routes } from "react-router-dom"
import ScrollToTop from "./Components/ScrollToTop";


function App() {

  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
            <Route path="/" element={<Homepage  />} />
            <Route path="/projects/:slug" element={<ProjectBlog />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App