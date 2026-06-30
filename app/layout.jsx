import "./globals.css";
import { Providers } from "@/store/providers";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" data-theme="light" dir="rtl">
      <head>
        <link rel="icon" href="/images/iconimage.png" type="image/png" />
      </head>
      <body className="bg-white dark:bg-black">
        <div 
          className="fixed top-0 left-0 w-full h-dvh -z-10 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/images/background_image.png')",
            backgroundAttachment: "scroll",
          }}
        />
        
        <div className="relative z-10 bg-white/80 dark:bg-black/70 min-h-dvh">
          <Providers>
            <main className="flex-1">{children}</main>
          </Providers>
        </div>
      </body>
    </html>
  );
}