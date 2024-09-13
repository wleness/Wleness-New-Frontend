import AllExpertsPage from "@components/Experts/All/AllExpertsPage";
import HappyClient from "@components/Sliders/HappyClient";
import { expertsClients } from "@data/clients";
import { ALL_EXPERTS } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
  title: "Best Psychologist in India | Wleness",
  description:
    "Find the perfect match for your needs. Wleness connects you with India's top-rated psychologists for online therapy & counseling. Affordable & convenient. Get started now!",
  alternates: {
    canonical: getCanonical(ALL_EXPERTS),
  },
};

export default function MainExpertsPage() {
  return (
    <>
      <AllExpertsPage />

      <div className="bg-slate-900">
        <div className="container mx-auto py-4 xl:py-8 text-center">
          <h2 className="subheading heading-primary">
            What Our Clients Say About Us
          </h2>
          <p className="text-center font-medium leading-5 xl:text-lg xl:leading-6 text-slate-400">
            Hear from our valued clients about their experience with us and the
            impact we&apos;ve made on their lives. Read their heartfelt
            testimonials and discover the quality of care and support we
            provide.
          </p>
        </div>
      </div>
      <HappyClient data={expertsClients} />
    </>
  );
}
