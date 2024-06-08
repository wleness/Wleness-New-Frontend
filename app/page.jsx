import Blogs from "@components/B2c/Blogs";
import Community from "@components/B2c/Community";
import Patterns from "@components/B2c/Patterns";
import PrimaryHeader from "@components/B2c/PrimaryHeader";
import Resolve from "@components/B2c/Resolve";

export default function Home() {
  return (
    <>
      <PrimaryHeader
        title="we listen. we understand. we resolve."
        subtitle="vent. gossip. confess. discuss. laugh. cry. live."
        desc="your safe-space. just yours. "
      />
      <Community />
      <Patterns />
      <Resolve />
      <Blogs />
    </>
  );
}
