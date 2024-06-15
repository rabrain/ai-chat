import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'
import { NextUIProvider } from "@nextui-org/system";
import { ReleaseProvider } from "@/lib/release-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Chat - Open ChatGPT in the Menu Bar",
  description: "Elevate your ChatGPT experience with AI Chat, the ultimate ChatGPT app. Access OpenAI ChatGPT instantly from your menu bar on Windows, Mac, or Linux.",
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
    <html lang="en" data-theme="dark">
      <body
        className={`${inter.className} bg-slate-900 text-slate-300 text-lg min-h-screen overflow-x-hidden`}
      >
        <NextUIProvider>
          <Navbar />
          <ReleaseProvider repo="rabrain/ai-chat">
            {children}
          </ReleaseProvider>
          <Footer />
        </NextUIProvider>
      </body>
      <GoogleAnalytics gaId="G-XHXGY43X34" />
    </html>
  );
}
