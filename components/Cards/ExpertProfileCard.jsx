import FormatPrice from "@utils/FormatPrice";
import Link from "next/link";
import Image from "next/image";
import { PRICING } from "@data/urls";

export default function ExpertProfileCard(props) {
  const slug = `/experts/profile/${props.data.slug}`; // slug for profile
  const bookNow = `/experts/booking/${props.data.slug}`; // slug for booking

  return (
    <figure className="flex flex-col justify-between rounded-2xl rounded-br-[5rem] border border-primary-one/50 bg-primary-two p-3 transition-all hover:shadow-sm hover:shadow-primary-one">
      <div className="mb-1 flex py-2">
        <div className="relative flex w-[35%] justify-center lg:w-2/5">
          <Link href={slug}>
            <div className="experts-profile-bg rounded-2xl lg:rounded-l-2xl">
              <Image
                src={props.data.image}
                alt=""
                className="mb-1 block w-full rounded-2xl object-cover lg:w-40 lg:rounded-l-2xl"
                width={220}
                height={320}
              />
            </div>
            <small className="block text-clip text-center font-quicksand font-semibold text-primary-one">
              {props.data.certification}
            </small>
          </Link>
        </div>
        <figcaption className="w-[65%] px-4 lg:w-3/5 3xl:px-6">
          <hgroup>
            <h2 className="text-xl font-semibold text-white lg:text-2xl">
              <span>{props.data.name}</span>
            </h2>
            <h5 className="font-semibold text-primary-one">
              {props.data.profession}
            </h5>

            <h4 className="text-sm font-semibold text-slate-200 lg:text-lg">
              {props.data.experience}
            </h4>
          </hgroup>
          <div className="text-xs font-medium lg:my-3 lg:text-base">
            <p className="leading-5 text-slate-300 lg:mb-2">
              <span className="font-semibold text-primary-one">
                Expertise:{" "}
              </span>
              {props.data.expertise}
            </p>
            <p className="leading-5 text-slate-300">
              <span className="font-semibold text-primary-one">Speaks: </span>
              {props.data.languages}
            </p>
            <h5 className="my-1 text-sm font-semibold text-primary-one lg:text-lg">
              <span>Session Starts </span>
              <FormatPrice price={props.data.price} currency="INR" />
            </h5>
          </div>
        </figcaption>
      </div>
      <div className="flex">
        <div className="w-[35%] lg:w-2/5">
          <Link
            href={slug}
            className="mx-auto block w-fit rounded-full border-2 border-primary-one px-3 py-2 text-center text-xs font-semibold text-primary-one transition-all hover:bg-primary-one hover:text-primary-two lg:px-6 lg:text-sm"
          >
            View Profile
          </Link>
        </div>
        <div className="w-[65%] px-4 lg:w-3/5 3xl:px-6">
          <Link
            // to={props.data.bookingUrl}
            href={PRICING}
            className="block w-fit rounded-full bg-primary-one px-4 py-2.5 text-center text-xs font-semibold border-2 border-transparent hover:text-primary-one hover:border-primary-one transition-all hover:bg-transparent lg:px-6 lg:py-2 lg:text-sm"
          >
            Book Now
          </Link>
        </div>
      </div>
    </figure>
  );
}
