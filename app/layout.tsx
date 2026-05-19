import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Wu | Portfolio",
  description:
    "A detailed portfolio of Alex Wu, a product engineer and pianist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
