import Banner from "../components/common/Banner"
import FuturePlansPage from "../components/pageComponents/FuturePlansPage"


const FuturePlans = () => {
    return (
        <div>
            <Banner
                title="Future Plans"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <FuturePlansPage />
        </div>
    )
}

export default FuturePlans