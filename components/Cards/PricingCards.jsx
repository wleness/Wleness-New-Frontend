"use client";
import { GET_SESSIONS } from "@data/api";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, forwardRef } from "react";

const Box = ({ data }) => {
  return (
    <figure className="border-2 border-primary-one flex flex-col justify-between h-full">
      <div className="h-full">
        <Image
          src={data.image}
          alt="banner image"
          className="w-full"
          width={300}
          height={150}
        />
        <h3 className="text-lg font-semibold py-2 border-y border-slate-500 text-center text-white">
          {data.title}
        </h3>
        <div className="border-y border-slate-600 text-center py-4">
          <h4 className="text-lg mb-2 font-semibold text-primary-one text-center">
            {data.session}
          </h4>
          <span>
            <span className=" text-xl font-bold text-primary-one">
              <span className="text-sm ">₹ </span>
              {data.discount_price}{" "}
            </span>
            <del className={`${data.id == 1 ? "hidden" : "text-slate-300"}`}>
              Rs. {data.price}
            </del>
          </span>
          <p>
            <small className="text-slate-400 capitalize">
              {data.discount_text.map((value, i) => {
                return (
                  <span
                    key={i}
                    className={i + 1 == 2 && "text-primary-one font-semibold"}
                  >
                    {value}
                  </span>
                );
              })}
            </small>
          </p>
        </div>
        <p className="text-slate-400 py-2 text-center px-4 xl:px-6 ">
          {data.features}
        </p>
      </div>
      <div>
        <p className="text-white text-2xl font-bold text-center pt-14 pb-4">
          <span className="text-sm">₹ </span>
          {data.discount_price}
        </p>
        <Link
          href={{
            pathname: "/booking",
            query: {
              session: data.session,
              id: data.id,
            },
          }}
          className="bg-primary-one inline-block text-center w-full font-medium py-2"
        >
          Start Your Transformation
        </Link>
      </div>
    </figure>
  );
};

const PricingCards = forwardRef((props, ref) => {
  const [sessions, setSessions] = useState(null);
  useEffect(() => {
    axios
      .get(GET_SESSIONS)
      .then((res) => setSessions(res.data.sessions))
      .catch((error) => console.log(error));
  }, [setSessions]);

  if (!sessions) {
    return <p>Loading...</p>;
  }

  return (
    <section className="bg-primary-two py-10 xl:py-20" ref={ref}>
      <div className="container mx-auto">
        <div className="grid gap-4 xl:grid-cols-3">
          {sessions.map((value, i) => {
            return <Box data={value} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
});

PricingCards.displayName = "PricingCards";
export default PricingCards;
