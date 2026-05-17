import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "River View Villas — Ayurvedic Wellness Retreat · Bentota, Sri Lanka",
  description: "A luxury Ayurvedic wellness retreat on the banks of the Bentota River. Doctor-guided healing packages, 30+ treatments, 5 private villas. Est. 2005.",
  keywords: "Ayurvedic retreat Sri Lanka, Panchakarma Bentota, Ayurveda healing, wellness retreat Sri Lanka, Bentota accommodation",
  openGraph: {
    title: "River View Villas — Where Ancient Healing Meets Sacred Stillness",
    description: "Luxury Ayurvedic wellness retreat on the Bentota River, Sri Lanka. Doctor-guided packages from 3 to 21 nights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '26739144672414876');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <img height="1" width="1" style={{display:"none"}}
            src="https://www.facebook.com/tr?id=26739144672414876&ev=PageView&noscript=1"
          />
        </noscript>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
