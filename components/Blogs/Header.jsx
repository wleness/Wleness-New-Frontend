import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <header className="bg-slate-800 px-4 py-5">
      <div className="text-center">
        <h1 className="subheading heading-primary !text-primary-one">
          Our Blogs
        </h1>
      </div>

      <form className="mx-auto flex items-center justify-between rounded-full bg-transparent border-2 border-primary-one lg:w-96">
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-l-full py-2.5 pl-5 pr-2 outline-none bg-transparent text-white"
        />
        <button
          type="submit"
          className="rounded-full bg-primary-one px-4 py-2.5"
        >
          <FontAwesomeIcon icon={faSearch} className=" text-primary-two" />
        </button>
      </form>
    </header>
  );
}
