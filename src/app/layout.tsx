import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { getServerSession } from "next-auth";
import NavMenu from "@/components/Navmenu";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Provider from "@/components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        {" "}
        <ThemeProvider attribute="class" defaultTheme="light">
          <Provider>
            {/* <NavMenu /> */}
            {children}
          </Provider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
