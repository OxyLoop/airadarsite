"use client";
import Hero from "../components/Hero";
import styles from "../styles/Vision.module.css";
import { useTranslations } from "next-intl";

const VisionPage = () => {
  const t = useTranslations("vision");

  return (
    <main>
      <Hero backgroundImage="/feature3.webp" namespace="aboutHero" />
      <section className={styles.visionSection}>
        <div className={styles.cardGrid}>
          {/* Hakkımızda */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <i className="fas fa-building"></i>
            </div>
            <h2 className={styles.title}>{t("aboutTitle")}</h2>
            <p className={styles.text}>{t("aboutText")}</p>
          </div>

          {/* Yanına Fotoğraf Kartı */}
          <div className={styles.card}>
            <img
              src="/hakkımızda.webp"
              alt={t("aboutTitle")}
              className={styles.imageCard}
            />
          </div>
        
          <div className={styles.card}>
            <img
              src="/vision.webp"
              alt={t("visionTitle")}
              className={styles.imageCard}
            />
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <i className="fas fa-bullseye"></i>
            </div>
            <h2 className={styles.title}>{t("visionTitle")}</h2>
            <p className={styles.text}>{t("visionText")}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VisionPage;
