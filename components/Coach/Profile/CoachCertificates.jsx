export default function CoachCertificates({ certificates }) {
  return (
    <section className="py-8 text-center bg-slate-950">
      <div className="container mx-auto">
        <h2 className="subheading my-4 text-center text-white">
          Certifications
        </h2>
        <div className="my-10 text-center">
          <div className="certificate-container grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {certificates.map((value, index) => (
              <div
                key={index}
                className="rounded-xl border-2 border-primary-one bg-slate-800 p-4 text-sm font-semibold text-primary-one shadow-md hover:bg-primary-one hover:text-black lg:text-base"
              >
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
