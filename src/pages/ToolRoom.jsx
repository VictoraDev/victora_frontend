import Banner from "../components/common/Banner"
import ToolRoomPage from "../components/pageComponents/ToolRoomPage"

const ToolRoom = () => {
    return (
        <div>
            <Banner
                title="Tool Room"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <ToolRoomPage />
        </div>
    )
}

export default ToolRoom