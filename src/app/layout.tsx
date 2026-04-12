import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import ThemeRegistry from "../components/ThemeRegistry";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "CECE's Dream | Community Empowerment & Childhood Education",
  description: "A nonprofit organization dedicated to empowering communities and supporting childhood education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeRegistry>
          <Header />
          {children}
          <Footer/>
        </ThemeRegistry>
      </body>
    </html>
  );
}
