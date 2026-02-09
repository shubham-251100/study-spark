import type { Metadata } from "next";
import { Inter, Varela_Round } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

// Font optimization with next/font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const varelaRound = Varela_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-varela",
  display: "swap",
});

// SEO Metadata - Applied to all pages
export const metadata: Metadata = {
  title: {
    default: "StudySpark - Life Skills Education for Students",
    template: "%s | StudySpark",
  },
  description:
    "Master essential life skills that school doesn't teach. Learn financial literacy, emotional intelligence, career planning, and more with interactive courses.",
  keywords: [
    "life skills",
    "student education",
    "financial literacy",
    "emotional intelligence",
    "career planning",
    "study skills",
    "online learning",
  ],
  authors: [{ name: "StudySpark" }],
  creator: "StudySpark",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "StudySpark",
    title: "StudySpark - Life Skills Education for Students",
    description:
      "Master essential life skills that school doesn't teach. Interactive courses for financial literacy, emotional intelligence, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StudySpark - Life Skills Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StudySpark - Life Skills Education",
    description:
      "Master essential life skills with interactive courses for students.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${varelaRound.variable} font-body antialiased`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
