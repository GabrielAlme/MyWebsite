import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from "./components/Projects.jsx"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
