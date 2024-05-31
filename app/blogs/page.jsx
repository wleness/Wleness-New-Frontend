"use client";
import Header from "@components/Blogs/Header";
import RecentBlogs from "@components/Blogs/RecentBlogs";
import FilterableBlogs from "@components/Blogs/FilterableBlogs";
import getBlogs from "@utils/getBlogs";

export default function page() {
  const {
    blogPosts,
    allBlogPosts,
    categories,
    recentPosts,
    status,
    handleBlogsFilter,
  } = getBlogs();

  if (!status) {
    return <div className="mb-5 text-center">Loading...</div>;
  }
  return (
    <>
      <Header />
      <RecentBlogs recentPosts={recentPosts} />
      <FilterableBlogs
        handleBlogsFilter={handleBlogsFilter}
        categories={categories}
        blogPosts={blogPosts}
        allBlogPosts={allBlogPosts}
      />
    </>
  );
}
