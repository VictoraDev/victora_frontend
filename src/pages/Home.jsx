import Certification from "../components/HomeComps/Certification"
import ManufacturingInfra from "../components/HomeComps/ManufacturingInfra"
import NewsCarousel from "../components/HomeComps/NewsCarousel"
import OurCustomers from "../components/HomeComps/OurCustomers"
import OurInfra from "../components/HomeComps/OurInfra"
import VictInfo from "../components/HomeComps/VictInfo"
import Carousel from "../components/Sliders/Carousel"

const Home = () => {
    return (
        <div className="w-full h-full">
            <Carousel />

            <div className="bg-gradient-to-b from-white via-blue-50 to-blue-100 px-10">
                <div className='from-white via-blue-50 to-blue-100'>
                    <ManufacturingInfra />
                    <VictInfo />
                    <OurInfra />
                    <NewsCarousel />
                    <Certification />
                    <OurCustomers />
                </div>
            </div>
        </div>
    )
}

export default Home