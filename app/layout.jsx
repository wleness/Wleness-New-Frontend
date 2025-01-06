import { LayoutProvider } from "./LayoutProvider";
import "../public/styles/globals.css";
import Script from "next/script";
// import { GoogleTagManager } from "@next/third-parties/google";
// import { GTM_ID } from "@data/urls";

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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2FD61NETZL"
      ></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-2FD61NETZL'); `}
      </Script>
      <Script id="google-tag-manager">
        {`(function (w, d, s, l, i) {
          w[l] = w[l] || []; w[l].push({
            'gtm.start':
              new Date().getTime(), event: 'gtm.js'
          }); var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
              'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-TZWK2K83');`}
      </Script>
      <body>
        {/* <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript> */}
        {/* <Script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="Tvl1K8"
        /> */}
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
