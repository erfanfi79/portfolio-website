import { Inter } from "next/font/google";
import "./globals.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Erfan Faravani CV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body class={inter.class}>{children}</body>
    </html>
  );
}
