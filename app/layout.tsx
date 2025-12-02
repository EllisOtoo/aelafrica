import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import ToastProvider from "./components/ToastProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Alpha Engineering Limited | Engineering Excellence Since 1981",
  description:
    "Alpha Engineering Limited delivers trusted plumbing and civil engineering solutions for public and private sector projects across Ghana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <ToastProvider />
      </body>
    </html>
  );
}
