import Banner from "../components/common/Banner"
import LocationPage from "../components/pageComponents/LocationPage"


const Locations = () => {
    return (
        <div>
            <Banner
                title="Location"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <LocationPage />
        </div>
    )
}

export default Locations