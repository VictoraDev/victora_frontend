import Banner from "../components/common/Banner"
import BlogDetailsPage from "../components/pageComponents/BlogDetailsPage"

const BlogDetails = () => {
    return (
        <div>
            <Banner
                title="Blogs Details"
                subtitle="Victora Industries"
                breadcrumb="Home"
                image="https://placehold.co/1920x500"
            />
            <BlogDetailsPage />
        </div>
    )
}

export default BlogDetails