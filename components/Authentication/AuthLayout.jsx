import AuthSidebar from "@components/Authentication/AuthSidebar";
import { LOGIN, SIGNUP } from "@data/urls";

export default function AuthLayout({ children, name }) {
  return (
    <section className="grid h-[100svh] bg-primary-two place-items-center py-6">
      <div
        className={`grid rounded-xl border-primary-one shadow-2xl lg:w-3/4 lg:border-2 ${
          name == "login"
            ? "lg:grid-cols-[1.8fr_3fr]"
            : "lg:grid-cols-[3fr_1.8fr]"
        }`}
      >
        <div
          className={`mb-8 grid place-items-center lg:h-[600px] ${
            name == "login" ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {children}
        </div>

        {name == "login" ? (
          <AuthSidebar
            name="login"
            title={"Hello Friend!"}
            desc="Enter you personal details and start journey with us"
            button={{ text: "SIGN UP", slug: SIGNUP }}
          />
        ) : (
          <AuthSidebar
            name="signup"
            title={"Welcome Back!"}
            desc="To keep connected with us please login with your personal info"
            button={{ text: "SIGN IN", slug: LOGIN }}
          />
        )}
      </div>
    </section>
  );
}
