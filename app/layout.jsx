import { LayoutProvider } from "./LayoutProvider";
import "../public/styles/globals.css";
import Script from "next/script";

export const metadata = {
  title: "Wleness | Mental Health Care",
  description: "Your mental health is our responsibility",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="GppAXM"
        />
      </head>
      <body>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
