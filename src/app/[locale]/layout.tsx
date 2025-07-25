import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../locales/${params.locale}/common.json`))
      .default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
