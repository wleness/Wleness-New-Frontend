export default function AboutCoach({ name, paras }) {
  return (
    <section className="py-6 text-center bg-slate-950 lg:py-8">
      <div className="container mx-auto">
        <h2 className="subheading my-4 text-white">
          About <span className="heading-primary">{name}</span>
        </h2>
        {paras.map((value, i) => {
          return (
            <p className="para text-justify text-slate-300" key={i}>
              {value}
            </p>
          );
        })}
      </div>
    </section>
  );
}
