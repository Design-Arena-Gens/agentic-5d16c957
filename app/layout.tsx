import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Full-Stack Developer Portfolio",
  description: "Modern minimalist portfolio with subtle animations.",
  metadataBase: new URL("https://agentic-5d16c957.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg text-fg antialiased selection:bg-accent/20 selection:text-fg">
        {children}
      </body>
    </html>
  );
}
