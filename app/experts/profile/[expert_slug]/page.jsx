import { EXPERTS_URI } from "@data/api";
import ProfileDetails from "../ProfileDetails";
import getCanonical from "@utils/getCanonical";
import { EXPERTS_PROFILE } from "@data/urls";
import axios from "axios";

export const generateMetadata = async ({ params }) => {
  const slug = params.expert_slug;
  try {
    const response = await axios.get(`${EXPERTS_URI}/${slug}`);
    const data = {
      title: `${response.data.name} Profile | Wleness`,
      description: response.data.expertise,
      alternates: {
        canonical: getCanonical(`${EXPERTS_PROFILE}/${slug}`),
      },
    };
    return data;
  } catch (error) {
    return {
      title: "Wleness Mental Health Care",
      description: "Wleness Experts profile page",
    }; // or throw error, depending on your use case
  }
};

export default function ExpertsProfilePage({ params }) {
  return <ProfileDetails slug={params.expert_slug} />;
}
