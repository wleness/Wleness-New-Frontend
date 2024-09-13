import ContactForm from "@components/Forms/ContactForm";
import { CONTACT_US } from "@data/urls";
import { about1, about4, meeting } from "@public";
import getCanonical from "@utils/getCanonical";
import Image from "next/image";

export const metadata = {
  title: "Contact Us | Wleness",
  description:
    "Have questions? We're here to help! Contact Wleness for any inquiries about our online therapy, coaching programs, or mental health resources.",
  alternates: {
    canonical: getCanonical(CONTACT_US),
  },
};

export default function ContactUsPage() {
  return (
    <>
      <header className="relative overflow-x-clip bg-primary-two pb-5 pt-12">
        <div className="container mx-auto text-center">
          <h1 className="subheading heading-primary">Contact Us</h1>
          <p className="text-lg font-semibold text-slate-300">
            Reach Out for Support and Guidance
          </p>
        </div>
      </header>

      <section className="py-8 bg-primary-two">
        <div className="container mx-auto space-y-5 font-medium">
          <ContactForm />
          <div>
            <div className="my-6 text-center">
              <h1 className="subheading heading-primary">
                Have a question? Talk to us
              </h1>
            </div>

            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 md:grid-cols-3 text-slate-300">
              <div className="text-center">
                <Image className="mx-auto" src={about1} alt="contact us" />
                <h2 className="text-lg font-semibold text-primary-one">
                  Email Us At
                </h2>
                <h3 className="font-bold ">hello@wleness.com</h3>
                <p className="font-semibold">
                  We&apos;ll get back to you within 24Hrs
                </p>
              </div>

              <div className="text-center">
                <Image className="mx-auto" src={about4} alt="contact us" />
                <h2 className="text-lg font-semibold text-primary-one">
                  Visit Us At
                </h2>
                <h3 className="font-bold">Spring House, Plot 2, Sec 43</h3>
                <p className="font-semibold">
                  Golf - Course Road, Gurgaon - 122002
                </p>
              </div>

              <div className="text-center">
                <Image className="mx-auto" src={meeting} alt="contact us" />
                <h2 className="text-lg font-semibold text-primary-one">
                  Call Us At
                </h2>
                <h3 className="font-bold">+91 9147047488</h3>
                <p className="font-semibold">Call between 10 AM to 6 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
