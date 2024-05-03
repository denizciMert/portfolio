import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import LocaleSwitch from "@/components/locale-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mert Denizci | Portfolio",
  description: "This is a personel protfolio website.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale} className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-black relative pt-28 sm:pt-36 dark:bg-gray-950 dark:text-white`}
      >
        <div
          className="
        bg-[#fbdac5] 
        fixed 
        top-[2rem] 
        -z-10 
        left-1/2 
        h-[31.25rem] 
        w-[50rem] 
        rounded-full 
        blur-[10rem] 
        dark:bg-[#716293]"
        ></div>

        <div
          className="
        bg-[#d7c5fb] 
        fixed 
        top-[2rem] 
        -z-10 
        right-1/2 
        h-[31.25rem] 
        w-[50rem] 
        rounded-full 
        blur-[10rem] 
        dark:bg-[#629390]"
        ></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
            <LocaleSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
