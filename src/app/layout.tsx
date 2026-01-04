import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const oswald = Oswald({ 
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai Prakash Reddy | Full Stack Developer",
  description: "Front-End and Full-Stack Developer with 2.8+ years of experience building responsive, scalable web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
