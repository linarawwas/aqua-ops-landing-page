import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: "AquaOps — نظام إدارة توزيع المياه في لبنان | Water Distribution Management",
  description:
    "AquaOps يرقمن عمليات شركات توزيع قوارير المياه في لبنان: إدارة الخطوط، تتبّع مالي بالدولار والليرة، مراقبة التوصيل لحظياً، وحسابات الزبائن. يعمل بدون إنترنت. جاهز خلال يوم. The distribution operations system built for Lebanese water distributors — offline routes, dual currencies, bottle tracking.",
  keywords: [
    "توزيع مياه لبنان",
    "نظام توزيع مياه",
    "برنامج توزيع قوارير",
    "إدارة شركة مياه",
    "water distribution Lebanon",
    "water delivery software",
    "bottle distribution management",
    "Lebanese water distributor app",
    "AquaOps",
  ],
  openGraph: {
    title: "AquaOps — نظام إدارة توزيع المياه في لبنان",
    description:
      "استبدل الدفاتر ومجموعات الواتساب بنظام مبنيٍّ على واقع التوزيع اللبناني — خطوط بلا إنترنت، دولار وليرة، وكلّ التفاصيل. Replace notebooks and WhatsApp groups with a system built for Lebanese water distribution.",
    type: "website",
    locale: "ar_LB",
    alternateLocale: "en_LB",
    siteName: "AquaOps",
    images: [
      {
        url: "/AquaOps-icon-512.png",
        width: 512,
        height: 512,
        alt: "AquaOps — Water Distribution Operations System",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "AquaOps — نظام توزيع المياه في لبنان",
    description:
      "نظام عمليات التوزيع المبنيّ للموزّعين اللبنانيين — يعمل بلا إنترنت، دولار وليرة، تتبّع القوارير.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: { icon: "/AquaOps-icon-512.png", apple: "/AquaOps-icon-192.png" },
};

export const viewport = {
  themeColor: "#0F1E38",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="geo.region" content="LB" />
        <meta name="geo.country" content="LB" />
        <meta name="language" content="Arabic, English" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
