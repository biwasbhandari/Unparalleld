import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider";
import Toast from "@/components/Toast/Toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

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
      <body className={poppins.className}>
        <main className="font-normal">
          <NextAuthProvider>
            <Toast />
            <Navbar />
            {children}
            <Footer />
          </NextAuthProvider>
        </main>
      </body>
    </html>
  );
}
