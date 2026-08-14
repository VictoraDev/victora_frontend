import Banner from "../components/common/Banner"
import CsrPage from "../components/pageComponents/CsrPage"

const Csr = () => {
    return(
         <div>
            <Banner
                title="CSR"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <CsrPage />
        </div>
    )
}

export default Csr