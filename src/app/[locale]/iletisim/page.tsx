"use client";

import Hero from "../components/Hero";
import styles from "../styles/Contact.module.css";
import { useTranslations } from "next-intl";

const ContactPage = () => {
  const t = useTranslations("contact");

  return (
    <main>
      <Hero backgroundImage="/feature4.webp" namespace="contactHero" />

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t("title")}</h2>
          <div className={styles.contentWrapper}>
            <div className={styles.info}>
              <h3 className={styles.infoTitle}>{t("reachUs")}</h3>
              <p>
                <strong>{t("addressLabel")}</strong> {t("address")}
              </p>
              <p>
                <strong>{t("phoneLabel")}</strong> +90 242 310 15 60
              </p>
              <p>
                <strong>{t("faxLabel")}</strong> +90 242 227 95 35
              </p>
              <p>
                <strong>{t("emailLabel")}</strong> info@arsolution.com.tr
              </p>
              <div className={styles.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.5522735956583!2d30.641229189081916!3d36.901057790386766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c391b13a4c8171%3A0xd343fb332f816300!2zQVIgQVJHRSBURUtOT0xPSsSwIFNBTkFZxLAgVkUgVMSwQ0FSRVQgQU5PTsSwTSDFnsSwUktFVMSw!5e0!3m2!1str!2str!4v1753433475563!5m2!1str!2str"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className={styles.formContainer}>
              <h3 className={styles.formTitle}>{t("sendMessage")}</h3>
              <form className={styles.form}>
                <input
                  type="text"
                  placeholder={t("namePlaceholder")}
                  className={styles.input}
                />
                <input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className={styles.input}
                />
                <textarea
                  placeholder={t("messagePlaceholder")}
                  className={styles.textarea}
                ></textarea>
                <button type="submit" className={styles.button}>
                  {t("submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
