import CareerForm from "@components/Forms/CareerForm";
import { CAREER } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
  title: "Career | Wleness",
  description:
    "Gain valuable insights into your mental well-being with Wleness online mental health assessment. Confidential & personalized feedback. Take control of your mental health today! ",
  alternates: {
    canonical: getCanonical(CAREER),
  },
};

export default function CareerPage() {
  return (
    <>
      <header className="relative overflow-x-clip bg-primary-two pb-5 pt-12">
        <div className="container mx-auto text-center">
          <h1 className="subheading heading-primary">Career</h1>
          <p className="text-lg font-semibold text-slate-300">
            Explore our avenues to kickstart your career
          </p>
        </div>
      </header>

      <section className="py-8 font-medium bg-primary-two">
        <div className="container mx-auto">
          <CareerForm />
        </div>
      </section>
    </>
  );
}
