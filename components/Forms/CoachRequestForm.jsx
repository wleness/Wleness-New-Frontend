import { COACH_CALLBACK_URI } from "@data/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CoachRequestForm({ name, title }) {
  const [formInfo, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  const router = useRouter();

  // Handle form value changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formInfo, [name]: value });
  };

  // Set Alert Message
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
      formInfo["name"] &&
      formInfo["phone"] &&
      formInfo["phone"] &&
      formInfo["country"] &&
      formInfo["message"]
    ) {
      let formData = new FormData();
      // Append form fields to the FormData object
      for (const key in formInfo) {
        formData.append(key, formInfo[key]);
      }
      formData.append("coach", name);

      axios
        .post(COACH_CALLBACK_URI, formData)
        .then((response) => {
          if (response.data.status == "success") {
            setFormData({
              name: "",
              email: "",
              phone: "",
              country: "",
              message: "",
            });
            router.push("/thank-you");
          } else {
            setMessage(response.data.status, response.data.message);
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
    <section className="py-8 bg-slate-950">
      <div className="container mx-auto bg-slate-900 grid rounded-3xl  px-6 py-8 xs:px-8 xs:py-14 md:grid-cols-2 lg:p-8">
        <div className="md:flex md:h-full md:flex-col md:justify-center md:px-6 md:pb-10">
          <div>
            <h3 className="font-medium text-slate-300 opacity-80 lg:text-lg">
              Need coaching?
            </h3>
            <h2 className="font-quicksand text-3xl font-bold leading-tight tracking-tight text-white opacity-90 xl:text-4xl">
              {title ? title : "Book a session"}
            </h2>

            <p className="pb-4 pt-2 font-medium text-slate-300 opacity-90 lg:text-lg">
              Book a free 30 Minutes exploratory session.
            </p>
            <p className="pb-4 pt-2 text-slate-400 font-semibold opacity-90 lg:text-lg">
              We&apos;ll book your appointment within 24-48 Hrs.
            </p>
          </div>
        </div>
        <form
          className="flex flex-col pt-10 md:px-6 md:pt-0"
          onSubmit={handleSubmit}
        >
          <label className="mb-3">
            <input
              type="text"
              placeholder="Enter Your Name"
              value={formInfo.name}
              onChange={handleChange}
              name="name"
              className="block w-full rounded-md px-6 py-4 outline-none shadow-md focus:ring focus:ring-primary-one focus:ring-opacity-75 bg-transparent border border-primary-one text-white"
            />
          </label>
          <label className="mb-3">
            <input
              type="tel" // Use "tel" for phone numbers
              placeholder="Your number"
              name="phone"
              value={formInfo.phone}
              onChange={handleChange}
              className="block w-full rounded-md px-6 py-4 outline-none shadow-md focus:ring focus:ring-primary-one focus:ring-opacity-75 bg-transparent border border-primary-one text-white"
            />
          </label>
          <label className="mb-3">
            <input
              type="email" // Use "tel" for phone numbers
              placeholder="Email Address"
              name="email"
              value={formInfo.email}
              onChange={handleChange}
              className="block w-full rounded-md px-6 py-4 outline-none shadow-md focus:ring focus:ring-primary-one focus:ring-opacity-75 bg-transparent border border-primary-one text-white"
            />
          </label>
          <label className="mb-3">
            <input
              type="text"
              placeholder="Country"
              name="country"
              value={formInfo.country}
              onChange={handleChange}
              className="block w-full rounded-md px-6 py-4 outline-none shadow-md focus:ring focus:ring-primary-one focus:ring-opacity-75 bg-transparent border border-primary-one text-white"
            />
          </label>
          <label className="mb-3">
            <input
              type="text"
              placeholder="Message"
              name="message"
              value={formInfo.message}
              onChange={handleChange}
              className="block w-full rounded-md px-6 py-4 outline-none shadow-md focus:ring focus:ring-primary-one focus:ring-opacity-75 bg-transparent border border-primary-one text-white"
            />
          </label>
          <p
            className={`text-center font-semibold ${
              successMessage.status == "success"
                ? " text-green-500 "
                : " text-red-500 "
            }`}
          >
            {successMessage.message}
          </p>

          <button type="submit" className="btn-one mx-auto mt-4">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
