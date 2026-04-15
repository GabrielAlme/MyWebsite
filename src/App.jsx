import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from "./components/Projects.jsx"
import LeaveMsg from "./components/LeaveMsg.jsx"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/LeaveMsg" element={<LeaveMsg />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
