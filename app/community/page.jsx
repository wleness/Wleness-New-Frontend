import Header from "@components/Community/Header";
import Community from "@components/Community/Community";
import Support from "@components/Community/Support";
import getCanonical from "@utils/getCanonical";
import { COMMUNITY } from "@data/urls";

export const metadata = {
    title: "Join Therapy Community with the Best Counsellor in India",
    keywords: [
        "community mental health program​",
        "best counsellor in india",
        "best psychologist near me",
    ],
    description:
        "Join a community mental health program and find the best psychologist near you. Consult the best counsellor in India for expert support in improving mental well-being.",
    alternates: {
        canonical: getCanonical(COMMUNITY),
    },
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
