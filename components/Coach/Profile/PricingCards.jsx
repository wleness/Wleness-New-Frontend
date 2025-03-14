"use client";
import CoachingUserDetailsForm from "@components/Forms/CoachingUserDetailsForm";
import useEnquiryForm from "@utils/useEnquiryForm";
import { useState } from "react";

function PricingCards({ packages, coach_name }) {
  const [selectedPackage, setSetselectedPackage] = useState({
    service: packages[0].title,
    name: packages[0].pricing[0].name,
    price: packages[0].pricing[0].price,
  });

  const setPackage = (name, title, price, original_price) => {
    setSetselectedPackage({
      service: title,
      name: name,
      price: price,
      original_price: original_price,
    });
  };

  const { enquiryForm, toggleForm } = useEnquiryForm();
  const [plan, setPlan] = useState({
    coach_name: coach_name,
  });

  const userDetailsForm = (data) => {
    setPlan({ ...plan, ...data });
    toggleForm();
  };

  return (
    <>
      <section className="lg:py-8 bg-slate-900">
        <div className="container mx-auto">
          <div className="my-4 text-center">
            <h2 className="subheading text-white">
              Session <span className="heading-primary">Modules</span>
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3 xl:gap-10">
            {packages.map((value, i) => {
              return (
                <figure key={i}>
                  <div className="grid grid-cols-2 font-semibold">
                    {value.pricing.map((price, k) => {
                      return (
                        <button
                          key={k}
                          onClick={() =>
                            setPackage(
                              price.name,
                              value.title,
                              price.price,
                              price.original_price
                            )
                          }
                          className={`rounded-t-md  px-4 py-1 ${
                            selectedPackage.service == value.title &&
                            selectedPackage.name == price.name
                              ? "bg-primary-one"
                              : "bg-yellow-200"
                          }`}
                        >
                          {price.name}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex flex-col justify-between rounded-b-lg border-x-2 border-b-2 border-primary-one bg-slate-800 px-4 pb-8">
                    <div className="mb-5 lg:mb-8">
                      <div className="mx-auto mb-5 w-fit rounded-b-xl text-white bg-black px-2 py-6 text-center lg:px-4">
                        {selectedPackage.service == value.title ? (
                          <>
                            <div className="flex">
                              <small className="mr-1 font-semibold">Rs. </small>
                              <p className="text-lg font-semibold xl:text-3xl">
                                {selectedPackage.price}
                              </p>
                            </div>
                            {selectedPackage.original_price ? (
                              <small className="text-slate-300">
                                <del>Rs. {selectedPackage.original_price}</del>
                              </small>
                            ) : null}
                          </>
                        ) : (
                          <>
                            <div className="flex">
                              <small className="mr-1 font-semibold">Rs. </small>
                              <p className="text-lg font-semibold xl:text-3xl">
                                {value.pricing[0].price}
                              </p>
                            </div>
                            {value.pricing[0].original_price ? (
                              <small className="text-slate-300">
                                <del>Rs. {value.pricing[0].original_price}</del>
                              </small>
                            ) : null}
                          </>
                        )}
                      </div>
                      <h2 className="mb-3 text-white text-center text-xl font-bold xl:text-2xl">
                        {value.title}
                      </h2>
                      <figcaption>
                        <p className="text-center text-slate-300 text-sm font-medium">
                          {value.desc}
                        </p>
                      </figcaption>
                    </div>
                    <div className="text-center">
                      <button
                        onClick={() => userDetailsForm(selectedPackage)}
                        className="rounded-lg bg-primary-one px-5 py-2 font-semibold text-black transition-all hover:bg-primary-300/80"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      <CoachingUserDetailsForm
        plan={plan}
        isOpen={enquiryForm}
        onClose={toggleForm}
      />
    </>
  );
}

export default PricingCards;
