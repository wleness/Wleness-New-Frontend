"use client";
import getBlogs from "@utils/getBlogs";
import FilterableBlogs from "./FilterableBlogs";
import RecentBlogs from "./RecentBlogs";

export default function BlogsFilterableBox() {
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
