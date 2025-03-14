import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caitlin Young",
  description: "Hi, I'm a Junior Front End Developer and Designer",
  openGraph: {
    images: ["/caitlin-young.jpg"], // Path to your image in /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
