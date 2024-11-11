import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  footer_assessment,
  footerAboutWleness,
  footerFocusAreas,
  footerLocation,
  footerOurExperts,
  footerOurServices,
  socialLinks,
  usefulLinks,
} from "@data/navigation";
import {
  iconAndroid,
  iconIOS,
  logoIAF,
  logoISO,
  PrimaryHeaderImage,
  startUpIndiaLogo,
} from "@public";
import Image from "next/image";
import { BLOGS } from "@data/urls";

export default function Footer() {
  return (
    <footer className=" bg-black font-medium pt-40">
      <div className="overflow-x-hidden">
        <Image
          src={PrimaryHeaderImage}
          alt="header image"
          className="w-[1024px] max-w-[1024px] -translate-x-[40%] xl:-translate-x-0 mx-auto xl:max-w-full xl:w-full"
        />
      </div>

      <div className="px-12 py-12">
        <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:gap-4 sm:space-y-0 lg:grid-cols-3 xl:grid-cols-6 xl:pb-0">
          <div className="2xl:pr-5">
            <h4 className="mb-2 text-lg font-semibold md:mb-4 lg:text-xl text-white">
              Location
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLocation.map((value, i) => {
                return (
                  <li key={i}>
                    <Link
                      href={value[1]}
                      className="grid grid-cols-[.2fr_1fr] items-center text-xs md:text-sm text-slate-300 hover:text-primary-one transition-all"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={value[2]} className="mr-3" />
                      <span className="font-medium">{value[0]}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:pl-7">
            <h4 className="mb-2 text-lg font-semibold md:mb-4 lg:text-xl  text-white">
              About Wleness
            </h4>
            <ul className="md:space-y-1">
              {footerAboutWleness.map((value, index) => {
                return (
                  <li key={index}>
                    <Link
                      className="text-xs md:text-sm text-slate-300 hover:text-primary-one transition-all"
                      href={value[1]}
                    >
                      {value[0]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:pl-3">
            <h4 className="mb-2 text-lg font-semibold md:mb-4 lg:text-xl  text-white">
              Our Services
            </h4>
            <ul className="md:space-y-1">
              {footerOurServices.map((value, index) => {
                return (
                  <li key={index}>
                    <Link
                      className="text-xs md:text-sm text-slate-300 hover:text-primary-one transition-all"
                      href={value[1]}
                    >
                      {value[0]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-semibold md:mb-4 lg:text-xl  text-white">
              Situations
            </h4>
            <ul className="md:space-y-1">
              {footerFocusAreas.map((value, index) => {
                return (
                  <li key={index}>
                    <Link
                      className="text-xs md:text-sm text-slate-300 hover:text-primary-one transition-all"
                      href={value[1]}
                    >
                      {value[0]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-2 !flex lg:col-span-1 lg:flex-col">
            <div className="w-1/2 lg:mb-4 lg:w-full">
              <h4 className="mb-2 text-lg font-semibold md:mb-4 lg:text-xl  text-white">
                Our Experts
              </h4>
              <ul className="md:space-y-1">
                {footerOurExperts.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link
                        className="text-xs md:text-sm text-slate-300 hover:text-primary-one transition-all"
                        href={value[1]}
                      >
                        {value[0]}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="w-1/2 pl-2.5 lg:w-full lg:pl-0">
              <h4 className="mb-2 text-lg font-semibold md:my-2 lg:text-xl  text-white">
                Library
              </h4>
              <ul className="md:space-y-1">
                <li>
                  <Link
                    className="text-xs md:text-sm text-slate-300 hover:text-primary-one transition-all"
                    href={BLOGS}
                  >
                    Self-Help Aritcles
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xs md:text-sm text-slate-300 hover:text-primary-one transition-all"
                    href="/free_mental_health_counselling"
                  >
                    Assessments
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-lg font-semibold md:mb-4 lg:text-xl text-white">
              Assessments
            </h4>
            <ul className="md:space-y-1">
              {footer_assessment.map((value, index) => {
                return (
                  <li key={index}>
                    <Link
                      className="text-xs md:text-sm text-slate-300 hover:text-primary-one transition-all"
                      href={value[1]}
                    >
                      {value[0]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="px-12 mb-6 border-y-2 border-slate-600 py-8">
        <h4 className="mb-2 text-center text-lg font-semibold md:mb-4 lg:text-xl text-white">
          Useful Links
        </h4>

        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {usefulLinks.map((value, i) => {
            return (
              <li key={i}>
                <Link
                  href={value[1]}
                  className="text-sm font-semibold text-primary-one underline"
                >
                  {value[0]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="px-12 pb-1 lg:pb-4">
        <div className="pb-2 text-center text-[13px] md:text-right text-slate-300">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span> | </span>
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
          <span> | </span>
          <Link href="/cancellation">Cancellation</Link>
        </div>
        <div className="items-center justify-between md:flex">
          <div className="flex justify-center gap-x-4">
            <Image
              width="auto"
              height="auto"
              alt="Startup India Logo"
              className="w-32 object-contain"
              src={startUpIndiaLogo}
            />
            <Image
              width="auto"
              height="auto"
              alt="IAF Logo"
              className="w-14 object-contain"
              src={logoIAF}
            />
            <Image
              width="auto"
              height="auto"
              alt="ISO Logo"
              className="w-10 object-contain"
              src={logoISO}
            />
          </div>

          <div className="my-5 flex justify-center">
            <h4 className="mr-2 text-center text-lg font-semibold lg:text-xl text-white">
              We are launching soon
            </h4>
            <div className="flex justify-center space-x-2">
              <Image
                width="auto"
                height="auto"
                alt="Android Logo"
                className="w-7 object-contain"
                src={iconAndroid}
              />
              <Image
                width="auto"
                height="auto"
                alt="IOS Logo"
                className="w-7 object-contain"
                src={iconIOS}
              />
            </div>
          </div>

          <div className="my-3 flex items-center justify-center gap-x-2">
            {socialLinks.map((value, i) => {
              return (
                <Link key={i} href={value[1]} target="_blank">
                  <FontAwesomeIcon
                    icon={value[0]}
                    className="w-5 text-slate-400 hover:text-primary-one"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-12 mb-5 space-y-4 text-justify text-xs text-slate-300 lg:mb-0">
        <p>
          Wleness does not cover emergencies in medicine or psychology. We do
          not intend to support those in distress, such as when they have
          suicidal or self-harming thoughts or exhibit signs of severe clinical
          disorders like schizophrenia and other psychotic ailments. The best
          type of assistance in these situations is in-person medical
          assistance. In case you believe you are going through any of these
          issues, we strongly advise you to go to the hospital or emergency room
          that is most convenient for you and speak with a therapist, social
          worker, or psychiatrist in person. We also advise including a close
          relative or friend who can provide support.
        </p>
        <p>
          You can also get in touch with a suicide hotline in your home nation:
        </p>
        <ul>
          <li>
            <Link
              className="mb-2 font-semibold hover:text-primary-one"
              href="http://healthcollective.in/contact/helplines/"
            >
              http://healthcollective.in/contact/helplines/
            </Link>
          </li>
          <li className="font-semibold">
            <span className="text-primary-one">Toll-free number: </span>
            <span>080 - 4611 0007</span>
          </li>
        </ul>
      </div>

      <p className="pb-5 text-center text-sm font-medium lg:pt-3 text-slate-400">
        @2024 Wleness || All Rights Reserved
      </p>
    </footer>
  );
}
