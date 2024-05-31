import { textColorize } from "@utils";

export default function RelationshipHelp({ data }) {
  return (
    <section className="pt-8 bg-primary-two pb-10">
      <div className="container mx-auto mt-5 rounded-2xl lg:!px-0">
        <div className="text-center">
          <h2 className="subheading py-16">{textColorize(data.title)}</h2>
        </div>

        <div className="grid gap-6 pb-6 pt-6 lg:grid-cols-2 lg:gap-10 lg:pt-12">
          {data.list.map((value, i) => (
            <div
              key={i}
              className="cursor-pointer rounded-2xl border-2 border-primary-one  px-6 py-3 shadow-lg hover:bg-primary-one/20"
            >
              <h6 className="text-lg font-bold text-white">{value.title}</h6>
              <p className="text-sm font-medium lg:text-base text-slate-300">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
