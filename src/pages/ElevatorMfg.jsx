import Banner from "../components/common/Banner"
import ElevatorMfgPage from "../components/pageComponents/ElevatorMfgPage"

const ElevatorMfg = () => {
    return (
        <div>
            <Banner
                title="Elevator Manufactuirng"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <ElevatorMfgPage />
        </div>
    )
}

export default ElevatorMfg