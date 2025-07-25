"use client";
import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const Footer = () => {
  const locale = useLocale();
  const t = useTranslations("footer");
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <img src="/logo.png" alt="AIRadar Logo" className={styles.logo} />
        </div>
        <div className={styles.linksSection}>
          <ul className={styles.linksList}>
            <li>
              <Link href={`/${locale}`}>{t("home")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/ozellikler`}>{t("features")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/vizyon`}>{t("about")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/galeri`}>{t("gallery")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/iletisim`}>{t("contact")}</Link>
            </li>
          </ul>
        </div>
        <div className={styles.contactSection}>
          <h3>{t("contactTitle")}</h3>
          <div className={styles.contactInfo}>
            <p>{t("address")}</p>
            <p>{t("email")}</p>
            <p>{t("phone")}</p>
            <p>{t("fax")}</p>
          </div>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/people/Ar-Arge-Technologi/pfbid027yZzar6hR2RA7ChYWKMKxcULCbae5tty6wmb2bMvPPUU86vdGypePqSTP8thvpwWl/?eav=AfYL5h6PYDRFYVFed9k3G9VhYuUdxIT4bKC6R34VejQQacZALuS5Irxw_lRMV9sh8iE&paipv=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://x.com/ar_arge_tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/ar-arge-teknoloji%CC%87-sanayi%CC%87-ve-ti%CC%87caret-anoni%CC%87m-%C5%9Fi%CC%87rketi%CC%87/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>
           ©2025 AIRadar. {t("rightsReserved")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
