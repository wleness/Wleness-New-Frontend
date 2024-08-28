"use client";
import { usePathname } from "next/navigation";
import Footer from "@components/common/Footer";
import PrimaryNavbar from "@components/common/PrimaryNavbar";
import CTA from "@components/common/CTA";
import Script from "next/script";

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
  ];

  const pathname = usePathname();
  if (plain_pages.includes(pathname)) {
    return children;
  } else {
    return (
      <>
        {/* <PrimaryNavbar scrollToPattern={scrollToPattern} /> */}
        {/* {Children.map(children, (child) =>
          cloneElement(child, {
            ref: ref,
            })
            )} */}
        <PrimaryNavbar />
        {children}
        <CTA isMobile={false} />
        <Script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="GppAXM"
        />
        <Footer />
      </>
    );
  }
};
