import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProvider from "../lib/util/ReactQueryProvider";
import NavBar from "@/components/common/navbar/NavBar";
import "./globals.css";
import Header from "@/components/header/Header";
import AuthGuard from "@/lib/util/AuthGuard";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIGOO",
  description: "Handwritten Letter Service to Read and Learn with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ReactQueryProvider>
          <AuthGuard>
            <Header />
            {children}
            <NavBar />
            <Toaster duration={1000} />
          </AuthGuard>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
