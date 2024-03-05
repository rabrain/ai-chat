import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatBar - ChatGPT in the menu Bar",
  description: "Elevate your ChatGPT experience with ChatBar, the ultimate ChatGPT app. Access OpenAI ChatGPT instantly from your menu bar on Windows, Mac, or Linux.",
  keywords: [
    "chatgpt",
    "chat gpt",
    "chatgpt app",
    "chat openai",
    "openai",
    "open ai",
    "gpt 4",
    "ai chat",
    "ai",
    "chat",
    "chatai",
    "chatbot gpt",
    "gpt chat",
    "openai chat",
    "openai chatgpt"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-900 text-slate-300 text-lg min-h-screen overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
