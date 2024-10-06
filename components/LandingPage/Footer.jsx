import {
  PRIVACY_POLICY,
  PSYCHIATRIST_JOIN,
  TERMS_AND_CONDITIONS,
  THERAPIST_JOIN,
} from "@data/urls";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 lg:py-16 bg-slate-950">
      <div className="container mx-auto grid lg:grid-cols-[2fr_1fr_1fr] gap-5">
        <div className="pr-10 lg:pr-20 space-y-4">
          <span className="font-bold text-primary-one text-2xl">Wleness</span>
          <p className="mt-3 text-slate-300">
            At Wleness, we believe in nurturing the harmony of mind, body, and
            soul, guiding you on a transformative journey towards holistic
            well-being. Embrace a life of vitality, balance, and inner peace as
            you explore a diverse array of resources, practices, and expert
            insights curated to elevate every facet of your wellness.
          </p>
          <div className="flex gap-4 text-primary-one text-xl">
            <div>
              <Link href="#">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <Link href="#">
                <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <Link href="#">
                <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-xl text-white mb-3">Quick Links</h5>
          <ul className="text-slate-300 space-y-3">
            <li>
              <Link href="#learn">Learn</Link>
            </li>
            <li>
              <Link href="#webinar">Webinar</Link>
            </li>
            <li>
              <Link href="#testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="#faqs">FAQs</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-xl text-white mb-3">Check This</h5>
          <ul className="space-y-3 text-slate-300">
            <li>
              <Link href={PSYCHIATRIST_JOIN}>Join us as Psychologist</Link>
            </li>
            <li>
              <Link href={THERAPIST_JOIN}>Join us as Therapist</Link>
            </li>
            <li>
              <Link href={PRIVACY_POLICY}>Privacy Policies</Link>
            </li>
            <li>
              <Link href={TERMS_AND_CONDITIONS}>Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
