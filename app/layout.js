import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

export const metadata = {
  title: {
    template: "%s / Prime Stays",
    default: "Welcome / Prime Stays",
  },
  description:
    "Experience unmatched luxury at Prime Stays, nestled in the heart of the Italian Dolomites. Surrounded by breathtaking mountain views and serene dark forests, our elegant accommodations offer the perfect blend of comfort and sophistication for an unforgettable retreat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
