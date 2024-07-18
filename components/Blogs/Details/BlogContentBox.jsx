"use client";
import Image from "next/image";

export default function BlogContentBox({ blogDetails }) {
  return (
    <article className="pb-5 lg:mb-8 lg:w-[70%]">
      <div className="mb-3 lg:mb-8">
        <Image
          src={blogDetails?.header_image}
          width={1024}
          height={280}
          alt=""
          className="w-full rounded-3xl object-cover object-top"
        />
      </div>
      <h1 className="subheading mb-5 text-white">{blogDetails?.title}</h1>

      <p className="mb-4 font-medium text-slate-300">{blogDetails?.desc}</p>
      <div
        id="blog-content"
        className="space-y-6"
        dangerouslySetInnerHTML={{ __html: blogDetails?.content }}
      />
    </article>
  );
}
