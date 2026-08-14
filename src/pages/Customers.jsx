import Banner from "../components/common/Banner"
import CustomersPage from "../components/pageComponents/CustomersPage"

const Customers = () => {
    return (
        <div>
            <Banner
                title="Customers"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <CustomersPage />
        </div>
    )
}

export default Customers