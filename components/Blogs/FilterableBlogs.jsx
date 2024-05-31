import BlogCard from "@components/Cards/BlogCard";

export default function FilterableBlogs({
  handleBlogsFilter,
  categories,
  blogPosts,
  allBlogPosts,
}) {
  return (
    <section className="bg-primary-two">
      <div className="container mx-auto lg:!px-0">
        <ul className="flex flex-wrap justify-center gap-2 pb-8 pt-5 lg:gap-x-14 lg:gap-y-6 lg:pt-0 2xl:pb-8">
          <li onClick={() => handleBlogsFilter("default")}>
            <span className="inline-block cursor-pointer border-2 rounded-3xl bg-primary-one px-6 py-2 text-xs font-bold text-slate-900 border-transparent hover:border-primary-one hover:text-primary-one transition-colors hover:bg-transparent md:text-base">
              All
            </span>
          </li>
          {categories.map((value, i) => {
            return (
              <li key={i} onClick={() => handleBlogsFilter(value)}>
                <span className="inline-block cursor-pointer border-2 rounded-3xl bg-primary-one px-6 py-2 text-xs font-bold text-slate-900 border-transparent hover:border-primary-one hover:text-primary-one transition-colors hover:bg-transparent md:text-base">
                  {value}
                </span>
              </li>
            );
          })}
        </ul>

        {/* ============== Blogs ============= */}
        <div className="grid gap-4 rounded-xl pb-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:pb-10">
          {blogPosts.map((value, i) => {
            return <BlogCard key={i} data={value} />;
          })}
        </div>

        {/* Dot Pagination */}
        {allBlogPosts.length > 9 ? (
          <div className="text-center">
            <button
              onClick={() => handleBlogsFilter(0)}
              className="btn-one mb-12"
            >
              Load More
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
