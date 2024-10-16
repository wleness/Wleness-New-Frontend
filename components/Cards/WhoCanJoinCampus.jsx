"use client";
import CampusAmbassadorForm from "@components/Forms/CampusAmbassadorForm";
import useEnquiryForm from "@utils/useEnquiryForm";

export default function WhoCanJoinCampus() {
  const { enquiryForm, toggleForm } = useEnquiryForm();

  return (
    <>
      <section className="relative overflow-y-auto overflow-x-hidden bg-primary-two py-4 lg:py-8">
        <div className="container mx-auto text-center">
          <h2 className="subheading mb-4 text-white">
            Who can join <span className="heading-primary">Wleness</span>
          </h2>
          <p className="mb-8 px-2 text-base font-semibold lg:px-10 lg:text-xl text-slate-400">
            An energetic passionate Psychology Students pursuing
            under-graduation & post-graduation from any university or college
            across India.
          </p>
          <div>
            <button className="btn-one" onClick={toggleForm}>
              Join Us Now
            </button>
          </div>
        </div>
      </section>

      <CampusAmbassadorForm isOpen={enquiryForm} onClose={toggleForm} />
    </>
  );
}
