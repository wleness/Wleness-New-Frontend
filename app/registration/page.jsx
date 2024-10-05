import FAQs from "@components/LandingPage/FAQs";
import Footer from "@components/LandingPage/Footer";
import Header from "@components/LandingPage/Header";
import JoinWebinar from "@components/LandingPage/JoinWebinar";
import Learn from "@components/LandingPage/Learn";
import Navbar from "@components/LandingPage/Navbar";
import SignupModal from "@components/LandingPage/SignupModal";
import Testimonials from "@components/LandingPage/Testimonials";
import WhyChoose from "@components/LandingPage/WhyChoose";
import WhyStressful from "@components/LandingPage/WhyStressful";

export default function Registration() {
  return (
    <>
      <Navbar />
      <Header />
      <WhyChoose />
      <WhyStressful />
      <Learn />
      <JoinWebinar />
      <Testimonials />
      <FAQs />
      <Footer />
    </>
  );
}
