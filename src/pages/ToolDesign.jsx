import Banner from "../components/common/Banner"
import ToolDesignPage from "../components/pageComponents/ToolDesignPage"

const ToolDesign = () => {
    return (
        <div>
            <Banner
                title="Tool Design"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <ToolDesignPage />
        </div>
    )
}

export default ToolDesign 