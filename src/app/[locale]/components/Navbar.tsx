"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const router = useRouter();

  const handleLocaleChange = (newLocale: string) => {
    router.replace(
      `/${newLocale}${window.location.pathname.replace(/^\/(tr|en|ch)/, "")}`
    );
  };

  return (
    <header className={styles.navbar}>
      {/* Logo */}
      <Link href="https://arsolution.com.tr/">
        <img src="/logo.png" alt="Logo" className={styles.logo} />
      </Link>

      {/* Brand Text */}
      <h1 className={styles.brandLogo}>AIRADAR</h1>

      {/* Nav Links */}
      <div className={styles.navLinks}>
        <nav>
          <Link href={`/${locale}`} className={styles.navlink}>
            {t("home")}
          </Link>
          <Link href={`/${locale}/ozellikler`} className={styles.navlink}>
            {t("features")}
          </Link>
          <Link href={`/${locale}/vizyon`} className={styles.navlink}>
            {t("about")}
          </Link>
          <Link href={`/${locale}/galeri`} className={styles.navlink}>
            {t("gallery")}
          </Link>
          <Link href={`/${locale}/iletisim`} className={styles.navlink}>
            {t("contact")}
          </Link>
        </nav>
      </div>

      {/* Action Buttons */}
      <div className={styles.actions}>
        <Link href={`/${locale}/demo`} className={styles.buttonDemo}>
          {t("demoRequest")}
        </Link>
        <Link
          href="https://airadar.arsolution.com.tr/user/login"
          className={styles.buttonOutline}
        >
          {t("login")}
        </Link>
        <Link
          href="https://arsolution.com.tr/online"
          className={styles.buttonPrimary}
        >
          {t("register")}
        </Link>
      </div>
      <div className={styles.languageSwitcher}>
        <select
          value={locale}
          onChange={(e) => handleLocaleChange(e.target.value)}
          className={styles.languageSelect}
        >
          <option value="tr">TR</option>
          <option value="en">EN</option>
          <option value="ch">CH</option>
        </select>
      </div>
    </header>
  );
};

export default Navbar;
