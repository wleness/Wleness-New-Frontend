"use client";
import "../../../public/styles/blog.css";
import getBlogDetails from "@utils/getBlogDetails";
import BlogSideBar from "@components/Blogs/Details/BlogSideBar";
import BlogContentBox from "@components/Blogs/Details/BlogContentBox";

export default function DetailPage({ slug }) {
  const { loading, blogDetails, blogCategories, recentBlogs } =
    getBlogDetails(slug);

  if (loading) {
    return <div className="mb-5 text-center">Loading...</div>;
  }

  return (
    <section className="container mx-auto lg:flex">
      <BlogContentBox blogDetails={blogDetails} />
      <BlogSideBar blogCategories={blogCategories} recentBlogs={recentBlogs} />
    </section>
  );
}
