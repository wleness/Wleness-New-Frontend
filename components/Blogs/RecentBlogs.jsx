"use client";
// Swiper Js & Styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { BLOGS } from "@data/urls";

export default function RecentBlogs({ recentPosts }) {
  return (
    <section className="bg-primary-two">
      <div className="container mx-auto py-8 lg:!px-0 lg:pb-24 lg:pt-12">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          className="blog-categories !overflow-x-clip overflow-y-visible"
          pagination={{ clickable: true }}
        >
          {recentPosts
            ? recentPosts.map((value, i) => {
                let slug = `${BLOGS}/${value.slug}`;
                return (
                  <SwiperSlide key={i}>
                    <div className="items-center rounded-xl lg:flex">
                      <Link className="inline-block lg:w-1/2" href={slug}>
                        <Image
                          src={value.thumbnail_image}
                          className="w-full rounded-2xl object-cover"
                          alt={value.title}
                          width={580}
                          height={360}
                        />
                      </Link>
                      <div className="pt-3 xs:w-full sm:w-full lg:w-1/2 lg:pl-12">
                        <p className="mb-2 font-semibold text-primary-one lg:text-lg">
                          {value.category}
                        </p>
                        <h1 className="mb-2 text-xl font-bold capitalize text-white lg:mb-4 lg:text-4xl">
                          <Link href={slug}>{value.title}</Link>
                        </h1>
                        <p className="text-sm font-medium text-slate-300 md:text-base lg:text-lg">
                          <span className="mr-2">
                            {value.desc.length >= 150
                              ? value.desc.slice(0, 150) + "..."
                              : value.desc}
                          </span>
                          <Link
                            href={slug}
                            className="text-base font-bold text-primary-one"
                          >
                            Read More
                          </Link>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            : ""}
        </Swiper>
      </div>
    </section>
  );
}
