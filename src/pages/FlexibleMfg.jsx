import Banner from "../components/common/Banner"
import FlexibleMfgPage from "../components/pageComponents/FlexibleMfgPage"

const FlexibleMfg = () => {
    return (
        <div>
            <Banner
                title="Flexible Mfg"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <FlexibleMfgPage />
        </div>
    )
}

export default FlexibleMfg