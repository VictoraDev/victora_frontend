import Banner from "../components/common/Banner"
import QualityPage from "../components/pageComponents/QualityPage"

const Quality = () => {
    return (
        <div>
            <Banner
                title="Quality"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <QualityPage />
        </div>
    )
}

export default Quality