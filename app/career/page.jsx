import CareerForm from "@components/Forms/CareerForm";

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
