import Image from "next/image";
import "./globals.css";
import { Providers } from "@/store/providers";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" data-theme="light" dir="rtl">
      <head>
        <link rel="icon" href="/images/iconimage.png" type="image/png" />
      </head>
      <body
        className="relative min-h-screen flex flex-col bg-white dark:bg-black"
        suppressHydrationWarning
      >
        <div className="fixed top-0 left-0 w-screen h-dvh -z-10 overflow-hidden">
          <Image
            src="/images/background_image.png"
            alt="Background"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 dark:opacity-30"
          />
        </div>

        <Providers>
          <main className="flex-1 relative z-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
