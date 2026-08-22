import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan Singh | Software Engineer",
  description: "Portfolio of Aryan Singh, Backend Systems & Full-Stack Developer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black text-slate-300 selection:bg-slate-300/30 selection:text-slate-100 relative">
        <div 
          className="fixed inset-0 z-[-1] opacity-20 pointer-events-none" 
          style={{ backgroundImage: `url('/grid.svg')`, backgroundSize: '40px 40px' }}
        />
        {children}
      </body>
    </html>
  );
}
