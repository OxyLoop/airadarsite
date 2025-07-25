"use client";
import "./styles/apple.css";
import Head from "next/head";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <>
      <Head>
        <title>AR Solution</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200;300;400;500;600&family=DM+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Hero section */}
      <section className="hero-section">
        <div className="text">
          <h1>{t("heroTitle")}</h1>
          <p>{t("heroSubtitle")}</p>
          <div className="cta-buttons">
            <button
              className="button-outline"
              onClick={() =>
                document.getElementById("info-section")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("explore")}
            </button>
            <button
              className="button-primary"
              onClick={() =>
                document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("buy")}
            </button>
            <button
              className="button-demo"
              onClick={() =>
                document.getElementById("download-section")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("download")}
            </button>
          </div>
          <div className="tubitak-badge">
            <img src="/excellence.png" alt="Excellence badge" />
          </div>
        </div>

        <div className="image-stack">
          <img className="layer back" src="/ar-image2.webp" alt="AR Doctor Layer 1" />
          <img className="layer mid" src="/ar-image2.webp" alt="AR Doctor Layer 2" />
          <img className="layer top" src="/ar-image2.webp" alt="AR Doctor Layer 3" />
        </div>
      </section>

      {/* Info section */}
      <section className="info-section" id="info-section">
        <div className="info-content">
          <div className="info-text">
            <p className="info-subtitle">{t("info.subtitle")}</p>
            <h2>{t("info.title")}</h2>
            <p>{t("info.text")}</p>
            <ul>
              <li>{t("info.list1")}</li>
              <li>{t("info.list2")}</li>
              <li>{t("info.list3")}</li>
            </ul>
            <h3>{t("info.more")}</h3>

            <Link href="/ozellikler" className="explore-btn">
              {t("exploreFeatures")}
            </Link>
          </div>

          <div className="info-image">
            <div className="laptop-screen">
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
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section" id="packages">
        <h2>{t("packages.title")}</h2>
        <div className="packages-cards">
          {["lite", "plus", "premium", "advance"].map((pkg) => (
            <div key={pkg} className={`package-card ${pkg}`}>
              <h3>{t(`packages.${pkg}.name`)}</h3>
              <ul>
                {t.raw(`packages.${pkg}.features`).map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="price">{t(`packages.${pkg}.price`)}</div>
              <Link
                href="https://airadar.arsolution.com.tr/user/login"
                className="package-btn"
              >
                {t("buy")}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Download Section */}
      <section className="download-section" id="download-section">
        <h2>{t("downloadSection.title")}</h2>
        <div className="download-cards">
          {["meta", "windows", "android"].map((platform) => (
            <div key={platform} className="download-card">
              <div className="download-header">
                <h3>{t(`downloadSection.${platform}.title`)}</h3>
                <img
                  src={`/${platform}.png`}
                  alt={`${platform} logo`}
                  className="download-icon"
                />
              </div>
              <ul className="download-list">
                {t.raw(`downloadSection.${platform}.features`).map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <div className="download-btn-wrapper">
                <button className="download-btn">{t("download")}</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
