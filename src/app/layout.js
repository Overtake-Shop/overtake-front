'use client'
import { Inter } from "next/font/google";
import "@/assets/scss/globals.scss";
import { usePathname } from "next/navigation";
import Header from '@/components/UI/Header'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        {
          pathname === ('/auth/login') || pathname === ('/auth/register') ? (
            {...children}
          ) : (
            <>
              <Header/>
              {children}
            </>
          )

        }
      </body>
    </html>
  );
}
