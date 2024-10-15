import { LayoutProvider } from "./LayoutProvider";
import "../public/styles/globals.css";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { GTM_ID } from "@data/urls";

export const metadata = {
  title:
    "Wleness - Best Online Therapy & Counseling | Best psychologist in India",
  description:
    "Wleness offers best online counseling & therapy with top psychologists in India. Address anxiety, depression, or any mental health concern through convenient chat, call, or video sessions.",
  verification: {
    google: "7ZPiRbEkyzTOk1rCf-fRYLOSl_k_ev1-sgwTLkVGT3A",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={GTM_ID} />
      <body>
        <Script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="Tvl1K8"
        />
        <LayoutProvider>{children}</LayoutProvider>
        <Script id="gtm" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', ${GTM_ID});`}
        </Script>
      </body>
    </html>
  );
}
