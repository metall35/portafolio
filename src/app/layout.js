import { Geist, Geist_Mono, Preahvihear } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const preahvihear = Preahvihear({
  variable: "--font-preahvihear",
  subsets: ["khmer"],
  weight: "400"
});

export const metadata = {
  title: "Portafolio - Mateo Pereira - Frontend Developer",
  description: "Portafolio de Mateo Pereira, Frontend Developer, hecho con Next.js",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.ico" sizes="any" />
      <body
        className={`${preahvihear.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
