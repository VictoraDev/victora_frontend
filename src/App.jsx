import { Routes, Route } from "react-router"
import Home from "./pages/Home.jsx"
import Navbar from "./components/Header/Navbar.jsx"
import Footer from "./components/common/Footer.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import Vission from "./pages/Vission.jsx"
import Leadership from "./pages/Leadership.jsx"
import OurJourney from "./pages/OurJourney.jsx"
import Certifications from "./pages/Certifications.jsx"
import KeymileStones from "./pages/KeymileStones.jsx"
import ManufacturingProcess from "./pages/ManufacturingProcess.jsx"
import FuturePlans from "./pages/FuturePlans.jsx"
import Quality from "./pages/Quality.jsx"
import Customers from "./pages/Customers.jsx"
import Csr from "./pages/Csr.jsx"
import Locations from "./pages/Locations.jsx"
import BusinessEnquries from "./pages/BusinessEnquries.jsx"
import Careers from "./pages/Careers.jsx"
import SupplyToUsPage from "./components/pageComponents/SupplyToUsPage.jsx"
import SuppyToUS from "./pages/SupplyToUs.jsx"
import DrivingDirection from "./pages/DrivingDirections.jsx"
import ElevatorMfg from "./pages/ElevatorMfg.jsx"
import ToolRoom from "./pages/ToolRoom.jsx"
import WeldShop from "./pages/WeldShop.jsx"
import PressShop from "./pages/PressShop.jsx"
import FlexibleMfg from "./pages/FlexibleMfg.jsx"
import ToolDesign from "./pages/ToolDesign.jsx"
import Blogs from "./pages/Blogs.jsx"
import BlogDetails from "./pages/BlogDetails.jsx"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/vission-mission' element={<Vission />} />
        <Route path='/leadership' element={<Leadership />} />

        <Route path='/our-journey' element={<OurJourney />} />
        <Route path='/certifications' element={<Certifications />} />
        <Route path='/key-milestones' element={<KeymileStones />} />
        <Route path='/manufacturing-process' element={<ManufacturingProcess />} />
        <Route path='/future-plans' element={<FuturePlans />} />
        <Route path='/quality' element={<Quality />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/csr' element={<Csr />} />

        <Route path='/location' element={<Locations />} />
        <Route path='/business-enquries' element={<BusinessEnquries />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/supply-to-us' element={<SuppyToUS />} />
        <Route path='/driving-directions' element={<DrivingDirection />} />
        <Route path='/elevator-mfg' element={<ElevatorMfg />} />

        <Route path='/tool-room' element={<ToolRoom />} />
        <Route path='/weld-shop' element={<WeldShop />} />
        <Route path='/press-shop' element={<PressShop />} />
        <Route path='/flexible-mfg' element={<FlexibleMfg />} />
        <Route path='/tool-design' element={<ToolDesign />} />

        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:urlSlug' element={<BlogDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
