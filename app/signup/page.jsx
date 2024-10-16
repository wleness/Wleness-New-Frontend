import SignUpPage from "@components/Authentication/SignUpPage";
import { SIGNUP } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
  title: "Wleness Registration | Sign Up for Online Mental Health Support",
  description: "Sign Up for Online Mental Health Support",
  alternates: {
    canonical: getCanonical(SIGNUP),
  },
};

export default function SignupPage() {
  return <SignUpPage />;
}
