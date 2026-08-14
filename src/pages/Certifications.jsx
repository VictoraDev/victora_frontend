import Banner from "../components/common/Banner"
import CertificationPage from "../components/pageComponents/CertificationPage"

const Certifications = () => {
     return (
        <div>
            <Banner
                title="Certifications"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <CertificationPage />
        </div>
    )
}

export default Certifications