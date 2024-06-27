import { PRIVACY_POLICY, TERMS_AND_CONDITIONS } from "@data/urls";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const FormInput = ({ type, name, value, label, onchange }) => {
  return (
    <div>
      <label className="text-slate-300" htmlFor={name}>
        {label}
      </label>
      <input
        className="form-input !border bg-transparent text-white !border-slate-500"
        type={type}
        name={name}
        id={name}
        onChange={onchange}
        value={value}
      />
    </div>
  );
};

export default function SchedulingForm({
  back,
  userData,
  setUserData,
  handleSubmit,
  loader,
  setLoader,
}) {
  // Handle form value changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="full_name"
          label="Full Name"
          onchange={handleChange}
          value={userData.full_name}
        />
        <FormInput
          type="tel"
          name="phone"
          label="Phone"
          onchange={handleChange}
          value={userData.phone}
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          onchange={handleChange}
          value={userData.email}
        />
        <p className="text-sm text-gray-400">
          <span>By proceeding, you agree to our </span>
          <Link className="text-slate-200" href={TERMS_AND_CONDITIONS}>
            Terms
          </Link>
          <span> and </span>
          <Link className="text-slate-200" href={PRIVACY_POLICY}>
            Privacy Policy
          </Link>
        </p>
        <div className="py-4 text-center">
          <button
            type="button"
            onClick={back}
            className="btn-2 mr-2 border-primary-one text-primary-one"
          >
            Back
          </button>
          <button
            type="submit"
            className="btn-2 bg-primary-one disabled:bg-slate-700 disabled:text-slate-400"
            onClick={() => setLoader(true)}
            disabled={Object.values(userData).includes("")}
          >
            {loader && !Object.values(userData).includes("") && (
              <FontAwesomeIcon className="animate-loader" icon={faSpinner} />
            )}
            <span> Confirm</span>
          </button>
        </div>
      </form>
    </div>
  );
}
