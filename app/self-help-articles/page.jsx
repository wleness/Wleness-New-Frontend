import Header from "@components/Blogs/Header";
import BlogsFilterableBox from "@components/Blogs/BlogsFilterableBox";

export const metadata = {
  title: "Wleness - Menta Health Blogs | self help articles",
  description:
    "Learn more about Mental illness with Wleness mental health blogs. Self-help articles, expert advice, and resources to support your well-being.",
};

export default function page() {
  return (
    <>
      <Header />
      <BlogsFilterableBox />
    </>
  );
}
