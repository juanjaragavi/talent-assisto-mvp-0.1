import { Montserrat } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "TalentAssisto | Your Smart Right Hand",
  description: "TalentAssisto makes it easy to create generative AI-powered HR agents optimized for HR tasks.",
  icons: {
    icon: "/openai.svg"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {assistantId ? children : <Warnings />}
        <img className="logo" src="/openai.svg" alt="TalentAssisto Logo" />
      </body>
    </html>
  );
}
