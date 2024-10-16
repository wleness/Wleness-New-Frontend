import LogInPage from "@components/Authentication/LogInPage";
import { LOGIN } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
  title: "Login | Welcome to the Wellness Community",
  description: "Welcome to the Wellness Community",
  alternates: {
    canonical: getCanonical(LOGIN),
  },
};

export default function LoginPage() {
  return <LogInPage />;
}
