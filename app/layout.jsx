import { LayoutProvider } from "./LayoutProvider";
import "../public/styles/globals.css";
import Script from "next/script";
import Head from "next/head";
import { Favicon } from "@public";

export const metadata = {
  title:
    "Wleness - Best Online Therapy & Counseling | Best psychologist in India",
  description:
    "Wleness offers best online counseling & therapy with top psychologists in India. Address anxiety, depression, or any mental health concern through convenient chat, call, or video sessions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={Favicon} type="image/svg+xml" />
      </Head>
      <body>
        <Script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="GppAXM"
        />
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
