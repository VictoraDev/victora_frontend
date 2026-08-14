import Banner from "../components/common/Banner"
import ManufacturingProcessPage from "../components/pageComponents/ManufacturingProcessPage"

const ManufacturingProcess = () => {
    return (
        <div>
            <Banner
                title="Manufacturing Process"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <ManufacturingProcessPage />
        </div>
    )
}

export default ManufacturingProcess