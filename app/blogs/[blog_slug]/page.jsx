import DetailPage from "@components/Blogs/Details/DetailPage";
import { SINGLE_BLOG_URI } from "@data/api";
import axios from "axios";

export const generateMetadata = async ({ params }) => {
  const slug = params.blog_slug;
  try {
    const response = await axios.get(`${SINGLE_BLOG_URI}/${slug}`);
    const blogData = {
      title: response.data.blog_details.meta_title,
      description: response.data.blog_details.meta_description,
    };
    return blogData;
  } catch (error) {
    return {
      title: "Wleness Mental Health Care",
      description: "Wleness Blog Posts",
    }; // or throw error, depending on your use case
  }
};

export default function BlogDetails({ params }) {
  const slug = params.blog_slug;
  return (
    <main className="bg-primary-two">
      <DetailPage slug={slug} />
    </main>
  );
}
