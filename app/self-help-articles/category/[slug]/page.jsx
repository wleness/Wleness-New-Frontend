import BlogCategoryPage from "@components/Blogs/BlogCategoryPage";
import { BLOGS_CATEGORY_URI } from "@data/api";
import { BLOGS } from "@data/urls";
import getCanonical from "@utils/getCanonical";
import axios from "axios";

export const generateMetadata = async ({ params }) => {
  const slug = params.slug;
  try {
    const response = await axios.get(`${BLOGS_CATEGORY_URI}/${slug}`);
    const blogData = {
      title: `${response.data.blogs[0]?.category} | Self Help Articles | Wleness`,
      description: response.data.blogs[0]?.desc,
      alternates: {
        canonical: getCanonical(`${BLOGS}/category/${slug}`),
      },
    };
    return blogData;
  } catch (error) {
    return {
      title: "Wleness Mental Health Care",
      description: "Wleness Blog Posts",
    }; // or throw error, depending on your use case
  }
};

export default function MainBlogCategoryPage({ params }) {
  return <BlogCategoryPage params={params} />;
}
