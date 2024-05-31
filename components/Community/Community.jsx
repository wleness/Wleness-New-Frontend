import CommunityCard from "@components/Cards/CommunityCard";
import { wlenessCommunity } from "@data/community";

export default function Community() {
  return (
    <section className="container mx-auto lg:pt-6 xl:flex xl:items-center xl:gap-5">
      <div className="pt-5 xl:w-1/2 xl:pr-16">
        <h1 className="subheading mb-6">
          <span className="heading-primary">Wleness </span>Community
        </h1>
        <p className="mb-8 text-base font-medium lg:text-lg">
          Through our community, individuals can find solace in knowing they are
          not alone in their struggles. Whether seeking advice, sharing stories,
          or simply finding comfort in the presence of others, our platform
          offers a supportive network that embraces diversity and encourages
          personal growth.
        </p>
        <p className="text-base font-medium lg:text-lg">
          We believe everyone deserves a space to be heard, understood, and
          supported without judgment. Join us and discover the power of
          community, where you can connect with like-minded individuals and
          embark on a journey of self-discovery and empowerment.
        </p>
      </div>

      <div className="grid grid-cols-2 xl:w-1/2">
        {wlenessCommunity.map((value, i) => {
          return <CommunityCard key={i} data={value} />;
        })}
      </div>
    </section>
  );
}
