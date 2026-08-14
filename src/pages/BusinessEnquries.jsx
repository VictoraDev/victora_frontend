import Banner from "../components/common/Banner"
import BusinessEnquriesPage from "../components/pageComponents/BusinessEnquriesPage"

const BusinessEnquries = () => {
    return (
         <div>
            <Banner
                title="Business Enquries"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <BusinessEnquriesPage />
        </div>
    )
}

export default BusinessEnquries