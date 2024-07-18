import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { B2B_JOIN_URI } from "@data/api";
import { PRIVACY_POLICY, THANKS_YOU } from "@data/urls";
import Link from "next/link";

export default function B2BForm({ isOpen, onClose }) {
  const router = useRouter();

  // Handle Joining Form
  const [formInfo, setFormData] = useState({
    org: "",
    professional_email: "",
    full_name: "",
    role: "",
    number: "",
    website: "",
  });
  const [policy, setPolicy] = useState(false);
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  // Close assessment modal on clicking outside of the box
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".corporate-form")) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // ========== Handle Form Submission ==========
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formInfo, [name]: value });
  };

  // ========== Update Policy ==========
  const handlePolicy = () => {
    setPolicy(!policy);
  };

  const setMessage = (status, message) => {
    setSuccessMessage({
      status: status,
      message: message,
    });
  };

  // Handle Post Request
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if form is filled
    if (
      formInfo["org"] &&
      formInfo["professional_email"] &&
      formInfo["full_name"] &&
      formInfo["role"] &&
      formInfo["number"] &&
      formInfo["website"]
    ) {
      if (!policy) {
        setMessage("error", "Please accept our policies to continue");
        return null;
      }

      let formData = new FormData();
      // Append form fields to the FormData object
      for (const key in formInfo) {
        formData.append(key, formInfo[key]);
      }

      axios
        .post(B2B_JOIN_URI, formData)
        .then((response) => {
          setMessage(response.data.status, response.data.message);

          if (response.data.status == "success") {
            setFormData({
              name: "",
              email: "",
              age: "",
              gender: "",
              phone: "",
            });
            onClose();
            router.push(THANKS_YOU);
          }
        })
        .catch((error) => {
          console.error("Error sending data:", error);
          setMessage("error", "Internal Server Error! Please Try Again later");
        });
    } else {
      setMessage("error", "Please fill your details properly!");
    }
  };

  return (
    <section
      className={`fixed inset-0 z-50 animate-fadeIn place-items-center bg-black/50 transition-all ${
        isOpen ? "grid" : "hidden"
      }`}
    >
      <div className="corporate-form w-4/5 animate-scaleIn rounded-2xl bg-slate-900 border border-primary-one p-6 transition-all lg:w-[620px]">
        <div className="text-center text-primary-one">
          <h2 className="subheading">B2B Join</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <p
            className={`mb-2 text-center font-semibold ${
              successMessage.status == "success"
                ? " text-green-500 "
                : " text-red-500 "
            }`}
          >
            {successMessage.message}
          </p>
          <label htmlFor="org">
            <input
              type="text"
              name="org"
              id="org"
              placeholder="Name of Your Organization *"
              className="form-input"
              value={formInfo.org}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="professional_email">
            <input
              type="text"
              name="professional_email"
              id="professional_email"
              placeholder="Professional Email *"
              className="form-input"
              value={formInfo.professional_email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="full_name">
            <input
              type="text"
              name="full_name"
              id="full_name"
              placeholder="Full Name *"
              className="form-input"
              value={formInfo.full_name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="role">
            <input
              type="text"
              name="role"
              id="role"
              placeholder="Your Role *"
              className="form-input"
              value={formInfo.role}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="number">
            <input
              type="text"
              name="number"
              id="number"
              placeholder="Phone Number *"
              className="form-input"
              value={formInfo.number}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="website">
            <input
              type="text"
              name="website"
              id="website"
              placeholder="Your Website *"
              className="form-input"
              value={formInfo.website}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="policyAccept" className="mb-4 flex px-2">
            <input
              type="checkbox"
              name="policyAccept"
              className="mr-2"
              id="policyAccept"
              checked={policy}
              onChange={handlePolicy}
            />
            <span className="text-[8px] text-slate-400 font-medium md:text-xs">
              I understand & agree that the information submitted in this form
              will be transmitted to, stored and processed by Wleness, in
              accordance with their &nbsp;
              <Link href={PRIVACY_POLICY} className="text-primary-one">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          <div className="grid grid-cols-2 justify-center lg:flex">
            <button
              type="reset"
              onClick={onClose}
              className="mr-2 rounded-2xl border-2 border-primary-one px-5 py-2 font-semibold text-primary-one transition-all hover:bg-primary-one hover:text-black"
            >
              Close
            </button>
            <button
              type="submit"
              className="rounded-2xl border-2 border-primary-one bg-primary-one px-5 py-2 font-semibold  transition-all hover:text-primary-one hover:bg-transparent"
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
