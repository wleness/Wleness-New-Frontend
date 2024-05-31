"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "../../../public/styles/blog.css";
import { SINGLE_BLOG_URI } from "@data/api";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetails({ params }) {
  const slug = params.blog_slug;
  const [blogDetails, setBlogDetails] = useState({});
  const [blogCategories, setBlogCategories] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(SINGLE_BLOG_URI + "/" + slug)
      .then((response) => {
        // Handle the successful response
        setBlogDetails(response.data.blog_details);
        setBlogCategories(response.data.categories);
        setRecentBlogs(response.data.recent_blogs);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
        setLoading(false);
        console.error(error);
      });
  }, [slug]);

  if (loading) {
    return <div className="mb-5 text-center">Loading...</div>;
  }

  return (
    <main className="bg-primary-two">
      <section className="container mx-auto lg:flex">
        <article className="pb-5 lg:mb-8 lg:w-[70%]">
          <div className="mb-3 lg:mb-8">
            <Image
              src={blogDetails.header_image}
              width={1024}
              height={280}
              alt=""
              className="w-full rounded-3xl object-cover object-top"
            />
          </div>
          <h1 className="subheading mb-5 text-white">{blogDetails.title}</h1>

          <p className="mb-4 font-medium text-slate-300">{blogDetails.desc}</p>
          <div
            id="blog-content"
            className="space-y-6"
            dangerouslySetInnerHTML={{ __html: blogDetails.content }}
          />
        </article>

        <section className="px-5 lg:w-[30%]">
          <form
            action=""
            method="get"
            className="mx-auto flex w-full rounded-3xl border-2"
          >
            <label htmlFor="search" className="w-full">
              <input
                type="search"
                name="search"
                id="search"
                className="w-full rounded-3xl bg-transparent px-4 py-2 outline-none"
                placeholder="Search"
              />
            </label>

            <button className="rounded-3xl bg-primary-one px-3 py-2 transition-all hover:bg-primary-one">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>

          <ul className="mt-4 space-y-3">
            <li className="w-full rounded-xl bg-yellow-100 px-4 py-2 font-semibold transition-all hover:bg-yellow-200">
              <Link href="/blogs" className="block">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-4" />
                <span>Back</span>
              </Link>
            </li>
            <li>
              <span className="mb-3 block w-full rounded-xl bg-primary-one px-4 py-2 font-semibold">
                All Categories
              </span>
              <ul className="mb-6 space-y-2">
                {blogCategories.map((value, i) => {
                  return (
                    <li
                      key={i}
                      className="flex justify-between px-4 font-semibold"
                    >
                      <Link
                        href={`/blogs/${value.slug}`}
                        className="transition-all text-slate-200 hover:text-primary-one"
                      >
                        {value.category}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            <li>
              <span className="mb-3 block w-full rounded-xl bg-yellow-50 px-4 py-2 font-semibold">
                Recent Posts
              </span>
              <ul className="mb-6 space-y-2 lg:space-y-4">
                {recentBlogs?.map((value, i) => {
                  return (
                    <li key={i} className="px-2">
                      <Link
                        href={`/blogs/${value.slug}`}
                        className="grid grid-cols-[1fr_3fr] items-center justify-between gap-3 font-semibold"
                      >
                        <Image
                          src={value.image}
                          alt={value.title}
                          width={1024}
                          height={56}
                          className="h-14 w-full rounded-md object-cover"
                        />
                        <span className="text-sm text-white">
                          {value.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}
