import Blogs from "@components/B2c/Blogs";
import Community from "@components/B2c/Community";
import Patterns from "@components/B2c/Patterns";
import PrimaryHeader from "@components/B2c/PrimaryHeader";
import Resolve from "@components/B2c/Resolve";
import CTA from "@components/common/CTA";
import { clients } from "@data/b2c";
import { WLENESS_URL } from "@data/urls";

export const metadata = {
  title:
    "Wleness - Best Online Therapy and Counseling | Best psychologist in India",
  description:
    "Wleness offers best online counseling &amp; therapy with top psychologists in India. Address anxiety, depression, or any mental health concern through convenient chat, call, or video sessions.",
  alternates: {
    canonical: WLENESS_URL,
  },
};

export default function Home() {
  return (
    <>
      <PrimaryHeader
        title="we listen. we understand. we resolve."
        subtitle="vent. whisper. confess. discuss. laugh. cry. live."
        desc="your safe-space. just yours. "
        clients={clients}
      />
      <Community />
      <Patterns />
      <Resolve />
      <Blogs />
      <CTA isMobile={true} />
    </>
  );
}
