import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/theme/Header";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Wisuda Yuuk",
  description: "Wisuda yuuk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <div className="border-t">
              <div className="bg-background ">
                <div className="grid grid-cols-1">
                  <div className="fixed w-full z-20 top-0 start-0">
                    <Header />
                  </div>
                  <div className="w-full mt-36">{children}</div>
                </div>
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
