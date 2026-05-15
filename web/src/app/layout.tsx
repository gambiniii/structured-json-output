import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import QueryProvider from "@/lib/QueryProvider";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ask AI",
  description: "Structured AI answers, powered by LLMs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <StyledComponentsRegistry>
          <QueryProvider>{children}</QueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
