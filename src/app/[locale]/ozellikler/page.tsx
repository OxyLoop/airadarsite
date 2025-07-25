"use client";
import "../styles/ozellikler.css"; 
import "../styles/apple.css"; 
import Hero from '../components/Hero';
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function OzelliklerPage() {
  const t = useTranslations("features");
  const locale = useLocale();
  const router = useRouter();
  return (
    <main className="ozellikler-main">
      <Hero backgroundImage="/Banner1.jpg" namespace="featuresHero" />

      {/* Features Card Section */}
      <section className="feature-cards-section">
        <div className="feature-card feature-card-first">
          <i className="fas fa-brain feature-icon"></i>
          <h3>{t("card1.title")}</h3>
          <p>{t("card1.desc")}</p>
        </div>
        <div className="feature-card feature-card-second">
          <i className="fas fa-vr-cardboard feature-icon"></i>
          <h3>{t("card2.title")}</h3>
          <p>{t("card2.desc")}</p>
        </div>
        <div className="feature-card feature-card-third">
          <i className="fas fa-users feature-icon"></i>
          <h3>{t("card3.title")}</h3>
          <p>{t("card3.desc")}</p>
        </div>
        <div className="feature-card feature-card-fourth">
          <i className="fas fa-mobile-alt feature-icon"></i>
          <h3>{t("card4.title")}</h3>
          <p>{t("card4.desc")}</p>
        </div>
        <div className="feature-card feature-card-fifth">
          <i className="fas fa-laptop-code feature-icon"></i>
          <h3>{t("card5.title")}</h3>
          <p>{t("card5.desc")}</p>
        </div>
        <div className="feature-card feature-card-sixth">
          <i className="fas fa-cube feature-icon"></i>
          <h3>{t("card6.title")}</h3>
          <p>{t("card6.desc")}</p>
        </div>
      </section>

      {/* Promo Video Section */}
      <section className="promo-video-section">
        <h2>{t("promoTitle")}</h2>
        <div className="promo-wrapper">
          <div className="device phone-device">
            <img src="/1.png" alt={t("phoneVideo")} className="phone-image" />
            <img src="/phone.png" alt="Telefon ekranı" className="phone-frame" />
          </div>

          <div className="device laptop-device">
            <div className="video-wrapper">
              <video
                src="/ArVideo.mp4"
                controls
                autoPlay
                muted
                loop
                playsInline
                className="laptop-video"
              />
            </div>
            <img src="/laptop.png" alt="Laptop ekranı" />
          </div>

          <div className="device meta-device">
            <img src="/metadevice.png" alt="Meta Quest cihazı" className="meta-image" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>{t("ctaTitle")}</h2>
        <p>{t("ctaDesc")}</p>
        <div className="cta-buttons">
          <Link href={`/${locale}/demo`} className="button-primary">{t("ctaButton")}</Link>
        </div>
      </section>
    </main>
  );
}
