import Banner from "../components/common/Banner"
import BlogsPage from "../components/pageComponents/BlogsPage"

const Blogs = () => {
    return (
        <div>
            <Banner
                title="Blogs"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <BlogsPage />
        </div>
    )
}

export default Blogs