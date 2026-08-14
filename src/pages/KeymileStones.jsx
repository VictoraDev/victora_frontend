import Banner from "../components/common/Banner"
import KeymileStonesPage from "../components/pageComponents/KeymileStonesPage"

const KeymileStones = () => {
    return (
        <div>
            <Banner
                title="Key Milestones"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <KeymileStonesPage />
        </div>
    )
}

export default KeymileStones