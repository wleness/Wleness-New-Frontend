import HomeServiceCard from "@components/Cards/HomeServiceCard";
import { home_services } from "@data/home";

export default function Services() {
  return (
    <section className="mb-8 pb-4 lg:mb-0 lg:py-14 xl:pb-20">
      {home_services.map((value, i) => {
        return <HomeServiceCard data={value} key={i} />;
      })}
    </section>
  );
}
