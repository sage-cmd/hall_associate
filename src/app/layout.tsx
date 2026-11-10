import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hall & Associates | A Legacy of Advocacy",
  description:
    "An editorial concept inspired by Edward Marshall Hall (1857–1927), the celebrated English barrister. A historical tribute, not a practising law firm.",
  applicationName: "Hall & Associates",
  openGraph: {
    title: "Hall & Associates | A Legacy of Advocacy",
    description:
      "A historical-concept chambers inspired by Edward Marshall Hall (1857–1927). For illustrative purposes only.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-[var(--background)] font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <a
            href="#main-content"
            className="sr-only z-[100] bg-[var(--gold)] p-3 text-[#111820] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
