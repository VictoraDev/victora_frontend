import Banner from "../components/common/Banner"
import LeadershipPage from "../components/pageComponents/LeadershipPage"


const Leadership = () => {
    return (
        <div>
            <Banner
                title="Leadership"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <LeadershipPage />
        </div>
    )
}


export default Leadership