import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation-bar";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Genzum",
  description: "Genzum Dimsum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} antialiased`}
      >
        <div className="container border border-gray-100">
          {children}
          <div className="fixed bottom-0 w-full max-w-[440px]">
            <NavigationBar />
          </div>
        </div>
      </body>
    </html>
  );
}
