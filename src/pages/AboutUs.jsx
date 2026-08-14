import Banner from "../components/common/Banner"
import AboutPage from "../components/pageComponents/AboutPage"


const AboutUs = () => {
    return (
        <div>
            <Banner
                title="About Us"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <AboutPage />
        </div>
    )
}


export default AboutUs