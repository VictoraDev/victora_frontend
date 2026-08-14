import Banner from "../components/common/Banner"
import OurJourneyPage from "../components/pageComponents/OurJourneyPage"

const OurJourney = () => {
    return (
        <div>
            <Banner
                title="Our Journey"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <OurJourneyPage />
        </div>
    )
}


export default OurJourney