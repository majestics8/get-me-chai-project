import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sessionwrapper from "./components/sessionwrapper";
import Navbar from "@/components/navbar";
import Footer from "@/components/Fotter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get me a chai",
  description: "created for the chai lovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
        >
        <Sessionwrapper>
       <Navbar/> 
       <div className="text-white min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        {children}
        </div>
        <Footer/>
      </Sessionwrapper>
      </body>
    </html>
  );
}
