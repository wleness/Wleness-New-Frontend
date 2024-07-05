import { useEffect, useState } from "react";
import axios from "axios";
import { YOGA_SUBSCRIPTION } from "@data/api";

export default function YogaUserDetailsForm({ isOpen, onClose, plan }) {
  // Handle Joining Form
  const [formInfo, setFormData] = useState({
    full_name: "",
    email: "",
    number: "",
    batch: "",
  });
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });
  const [proceed, setProceed] = useState(false);

  // Close assessment modal on clicking outside of the box
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".user-details-form")) {
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

  // Handle Post Request
  const initiatePayment = async (e) => {
    e.preventDefault();

    // Validate if form is filled
    if (
      formInfo["full_name"] &&
      formInfo["email"] &&
      formInfo["number"] &&
      formInfo["batch"]
    ) {
      let data = { ...formInfo, title: plan.title, price: plan.price };

      axios
        .post(YOGA_SUBSCRIPTION, data)
        .then((response) => {
          setProceed(true);
          if (response.data.status == "success") {
            setFormData({
              full_name: "",
              email: "",
              number: "",
              batch: "",
            });
            window.location = response.data.redirect_url;
          }
        })
        .catch((error) => {
          console.error(error);
          setSuccessMessage({
            status: "error",
            message: "Please try again!",
          });
        });
    } else {
      setSuccessMessage({
        status: "error",
        message: "Please fill your details properly!",
      });
    }
  };

  return (
    <section
      className={`fixed inset-0 z-50 grid animate-fadeIn place-items-center bg-black/20 transition-all ${
        isOpen ? "grid" : "hidden"
      }`}
    >
      <div className="user-details-form w-4/5 animate-scaleIn rounded-2xl border-2 border-primary-one bg-slate-900 p-6 transition-all lg:w-[420px]">
        <div className="text-center">
          <h2 className="subheading text-white">Enter Your Details</h2>
        </div>

        <form onSubmit={initiatePayment} className="lg:py-2">
          <p
            className={`mb-2 text-center font-semibold ${
              successMessage.status == "success"
                ? " text-green-500 "
                : " text-red-500 "
            }`}
          >
            {successMessage.message}
          </p>

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
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email *"
              className="form-input"
              value={formInfo.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="batch">
            <select
              name="batch"
              id="batch"
              className="form-input"
              value={formInfo.batch}
              onChange={handleChange}
            >
              <option value="">-- Select Batch --</option>
              <option value="07:00 to 08:00 AM">07:00 to 08:00 AM</option>
              <option value="08:00 to 09:00 AM">08:00 to 09:00 AM</option>
            </select>
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
              disabled={
                !formInfo["email"] ||
                !formInfo["full_name"] ||
                !formInfo["number"] ||
                proceed
              }
              className="rounded-2xl bg-primary-one px-5 py-2 font-semibold transition-all hover:border-one  hover:bg-primary-one disabled:cursor-not-allowed disabled:bg-slate-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
