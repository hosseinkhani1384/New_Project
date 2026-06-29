import "./globals.css";
import { Providers } from "../store/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" data-theme="light" dir="rtl">
      <head>
        <link rel="icon" href="/images/iconimage.png" type="image/png" />
      </head>
      <body className="bg-white dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
