import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unparalleled | Dress to Intrigue",
  description:
    "Elevate your wardrobe with unparalleled fashion at our exclusive ecommerce store. Discover a curated collection of exquisite dresses designed to intrigue and captivate. Unleash your style and shop for the extraordinary at Unparalleld",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png?v=4"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
