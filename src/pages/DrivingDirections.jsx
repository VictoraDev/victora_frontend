import Banner from "../components/common/Banner"
import DrivingDirectionPage from "../components/pageComponents/DrivingDirectionPage"

const DrivingDirection = () => {
    return (
        <div>
            <Banner
                title="Driving Directions"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <DrivingDirectionPage/>
        </div>
    )
}

export default DrivingDirection