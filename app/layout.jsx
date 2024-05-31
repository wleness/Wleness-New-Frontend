import { LayoutProvider } from "./LayoutProvider";
import "../public/styles/globals.css";

export const metadata = {
  title: "Wleness | Mental Health Care",
  description: "Your mental health is our responsibility",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
