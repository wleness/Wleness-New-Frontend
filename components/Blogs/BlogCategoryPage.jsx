"use client";
import BlogCard from "@components/Cards/BlogCard";
import { useEffect, useState } from "react";
import { BLOGS_CATEGORY_URI } from "@data/api";
import axios from "axios";

export default function BlogCategoryPage({ params }) {
  const [blogs, setBlogs] = useState({});
  const [currentCategory, setCurrentCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const slug = params.slug;
  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(BLOGS_CATEGORY_URI + "/" + slug)
      .then((response) => {
        // Handle the successful response
        setBlogs(response.data.blogs);
        setCurrentCategory(response.data.category);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  });

  if (loading) {
    return <p>Loading..</p>;
  }
  return (
    <>
      <header className="bg-slate-900 px-4 py-5">
        <div className="text-center">
          <h1 className="subheading heading-primary">{currentCategory}</h1>
        </div>
      </header>

      <section className="bg-black">
        {blogs.length != 0 ? (
          <div className="container mx-auto grid gap-4 rounded-xl py-6 sm:grid-cols-2  lg:grid-cols-3 lg:gap-6 lg:pb-10 xl:py-8">
            {blogs.map((value, i) => {
              return <BlogCard key={i} data={value} />;
            })}
          </div>
        ) : (
          <p className="py-8 text-center font-semibold">No Blogs Found</p>
        )}
      </section>
    </>
  );
}
