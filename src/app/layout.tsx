import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "HK Computer Dashboard",
  description: "A dashboard for managing computer repairs and purchases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <main>
        {children}
      <Toaster richColors position="top-right" />

        </main>
        </body>
    </html>
  );
}
