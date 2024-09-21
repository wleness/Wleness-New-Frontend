"use client";
import PrimaryTitle from "@components/Title/PrimaryTitle";
import { BLOGS_URI } from "@data/api";
import { BLOGS } from "@data/urls";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rubik_one } from "@public";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blogs() {
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
    <section className="bg-primary-two pt-10 xl:pt-16">
      <div className="flex flex-col items-center justify-center text-center mb-5">
        <PrimaryTitle text={"Self-Help Articles"} />
      </div>
      <div className="container mx-auto border border-primary-one rounded-xl py-14 lg:pt-20">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-8 px-5 ">
          {blogs.slice(0, 3).map((value, i) => {
            return (
              <div key={i}>
                <Link href={`${BLOGS}/${value.slug}`} className="flex flex-col">
                  <Image
                    src={value.thumbnail_image}
                    alt={value.title}
                    width={320}
                    height={180}
                    className="mb-2 rounded-lg xl:w-full"
                  />
                  <h2 className="text-lg font-bold text-white">
                    {value.title.length > 50 ? (
                      <span>
                        {value.title.substring(0, 50)}
                        <span className="text-base font-bold text-primary-one">
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
            href={BLOGS}
            className="border-spacing-5 border-b-2 border-primary-one text-sm font-bold text-primary-one"
          >
            <span>EXPLORE MORE </span>
            <FontAwesomeIcon className="ml-1" icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  );
}
