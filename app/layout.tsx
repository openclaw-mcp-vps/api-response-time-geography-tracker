import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Response Time Geography Tracker",
  description: "Track API response times by user geography. Monitor performance from multiple regions and get alerted on slowdowns."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="436946aa-dda3-4f21-a6fa-4736cda1afec"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
