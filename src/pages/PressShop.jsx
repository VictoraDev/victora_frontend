import Banner from "../components/common/Banner"
import PressShopPage from "../components/pageComponents/PressShopPage"

const PressShop = () => {
    return(
        <div>
             <Banner
                title="Press Shop"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <PressShopPage />
        </div>
    )
}

export default PressShop