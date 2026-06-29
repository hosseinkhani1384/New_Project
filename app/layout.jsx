import "./globals.css";
import { Providers } from "../store/providers";

export default function RootLayout({ children }) {

  return (
    <html lang="en" data-theme="light">
      <body className="bg-white dark:bg-black">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}