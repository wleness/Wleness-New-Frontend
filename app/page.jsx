"use client";
import Blogs from "@components/B2c/Blogs";
import Community from "@components/B2c/Community";
import Patterns from "@components/B2c/Patterns";
import PrimaryHeader from "@components/B2c/PrimaryHeader";
import Resolve from "@components/B2c/Resolve";
import CTA from "@components/common/CTA";
import { clients } from "@data/b2c";
import usePricingScroll from "@utils/usePricingScroll";

export default function Home() {
  const { handleScrollToComponent } = usePricingScroll();
  return (
    <>
      <PrimaryHeader
        title="we listen. we understand. we resolve."
        subtitle="vent. gossip. confess. discuss. laugh. cry. live."
        desc="your safe-space. just yours. "
        clients={clients}
        handleScrollToComponent={handleScrollToComponent}
      />
      <Community />
      <Patterns handleScrollToComponent={handleScrollToComponent} />
      <Resolve handleScrollToComponent={handleScrollToComponent} />
      <Blogs />
      <CTA isMobile={true} />
    </>
  );
}
