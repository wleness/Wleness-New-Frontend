import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { BLOGS_URI } from "@data/api";

export default function ResourceBlogs() {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch blogs data
  useEffect(() => {
    axios
      .get(BLOGS_URI)
      .then((response) => {
        setBlogs(response.data.blogs);
        setLoading(false);
      })
      .catch((error) => console.error(error));
    return () => {};
  }, []);

  if (loading) {
    return <span>Loading...</span>;
  }
  return (
    <>
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
        {blogs.slice(0, 3).map((value, i) => {
          return (
            <div key={i}>
              <Link href={`/blog/${value.slug}`} className="flex flex-col">
                <Image
                  src={value.thumbnail_image}
                  alt={value.title}
                  className="mb-2 rounded-lg"
                />
                <h2 className="text-lg font-bold">
                  {value.title.length > 50 ? (
                    <span>
                      {value.title.substring(0, 50)}
                      <span className="text-base font-bold text-primary-400">
                        ....Read More
                      </span>
                    </span>
                  ) : (
                    value.title
                  )}
                </h2>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/blogs"
          className="border-spacing-5 border-b-2 border-primary-300 text-sm font-bold text-primary-400"
        >
          <span>EXPLORE MORE </span>
          <FontAwesomeIcon className="ml-1" icon={faArrowRight} />
        </Link>
      </div>
    </>
  );
}
