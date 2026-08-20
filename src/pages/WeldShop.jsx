import Banner from "../components/common/Banner"
import WeldShopPage from "../components/pageComponents/WeldShopPage"

const WeldShop = () => {
    return(
        <div>
             <Banner
                title="Weld Shop"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <WeldShopPage />
        </div>
    )
}

export default WeldShop