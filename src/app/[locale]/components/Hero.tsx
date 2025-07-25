"use client";

import styles from "./Hero.module.css";
import { useTranslations } from "next-intl";

interface HeroProps {
  backgroundImage: string;
  namespace: string; // sayfa anahtarı
}

const Hero = ({ backgroundImage, namespace }: HeroProps) => {
  const t = useTranslations(namespace);

  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.subtitle}>{t("subtitle")}</p>
      </div>
    </div>
  );
};

export default Hero;
