import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AuthHeading({ title, google, facebook }) {
  return (
    <>
      <h2 className="mb-2 text-2xl font-extrabold text-primary-one lg:text-5xl">
        {title}
      </h2>
      <div className="mb-6 flex items-center justify-center gap-x-2 py-2">
        <button
          onClick={google}
          className="grid h-12 w-12 place-items-center rounded-full border-2 border-primary-one"
        >
          <FontAwesomeIcon icon={faGoogle} className="text-primary-one" />
        </button>
        <button
          onClick={facebook}
          className="grid h-12 w-12 place-items-center rounded-full border-2 border-primary-one"
        >
          <FontAwesomeIcon icon={faFacebook} className="text-primary-one" />
        </button>
      </div>
      <span className="mb-6 inline-block font-semibold text-slate-400">
        or use your email for registration
      </span>
    </>
  );
}
