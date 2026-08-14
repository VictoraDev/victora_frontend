import Banner from "../components/common/Banner"
import CareersPage from "../components/pageComponents/CareersPage"

const Careers = () => {
    return (
        <div>
            <Banner
                title="Carrers"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <CareersPage />
        </div>
    )
}

export default Careers