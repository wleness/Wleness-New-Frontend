import { LayoutProvider } from "./LayoutProvider";
import "../public/styles/globals.css";
import Script from "next/script";

export const metadata = {
  title:
    "Wleness - Best Online Therapy & Counseling | Best psychologist in India",
  description:
    "Wleness offers best online counseling & therapy with top psychologists in India. Address anxiety, depression, or any mental health concern through convenient chat, call, or video sessions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="Tvl1K8"
        />
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
