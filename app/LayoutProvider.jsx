"use client";
import { usePathname } from "next/navigation";
import Footer from "@components/common/Footer";
import PrimaryNavbar from "@components/common/PrimaryNavbar";
import CTA from "@components/common/CTA";

export const LayoutProvider = ({ children }) => {
  const plain_pages = [
    "/login",
    "/signup",
    "/forgot-password",
    "/user/dashboard",
    "/user/profile",
    "/user/history",
    "/experts/login",
    "/experts/dashboard",
    "/experts/payment",
    "/registration",
  ];

  const pathname = usePathname();
  if (plain_pages.includes(pathname)) {
    return children;
  } else {
    return (
      <>
        <PrimaryNavbar />
        {children}
        <CTA isMobile={false} />
        <Footer />
      </>
    );
  }
};
