import { Routes, Route } from "react-router"
import Home from "./pages/Home.jsx"
import Navbar from "./components/Header/Navbar.jsx"
import Footer from "./components/common/Footer.jsx"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
