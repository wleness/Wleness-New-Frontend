import Header from "@components/Community/Header";
import Community from "@components/Community/Community";
import Support from "@components/Community/Support";

export const metadata = {
  title: "Community | Wleness",
  description:
    "Connect with others on their mental health journeys at the Wleness Community. Share experiences, find support, and feel empowered. Join now!",
};

export default function page() {
  return (
    <>
      <Header />
      <Community />
      <Support />
    </>
  );
}
