import Header from "@components/Blogs/Header";
import BlogsFilterableBox from "@components/Blogs/BlogsFilterableBox";
import Head from "next/head";
import getCanonical from "@utils/getCanonical";
import { BLOGS } from "@data/urls";

export const metadata = {
  title: "Wleness - Mental Health Blogs | self help articles",
  description:
    "Learn more about Mental illness with Wleness mental health blogs. Self-help articles, expert advice, and resources to support your well-being.",
  alternates: {
    canonical: getCanonical(BLOGS),
  },
};

export default function page() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={() => getCanonical(BLOGS)}
          key="canonical"
        />
      </Head>
      <Header />
      <BlogsFilterableBox />
    </>
  );
}
