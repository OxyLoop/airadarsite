"use client";

import React, { useState } from "react";
import styles from "./Demo.module.css";
import { useTranslations } from "next-intl";

const DemoPage = () => {
  const t = useTranslations("demo");
  const [requestType, setRequestType] = useState("individual");

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.subtitle}>{t("subtitle")}</p>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="firstName" className={styles.label}>{t("firstName")}</label>
            <input type="text" id="firstName" name="firstName" className={styles.input} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="lastName" className={styles.label}>{t("lastName")}</label>
            <input type="text" id="lastName" name="lastName" className={styles.input} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>{t("email")}</label>
            <input type="email" id="email" name="email" className={styles.input} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.label}>{t("phone")}</label>
            <input type="tel" id="phone" name="phone" className={styles.input} required />
          </div>

          {/* Talep Türü */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>{t("requestType")}</label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="requestType"
                  value="individual"
                  checked={requestType === "individual"}
                  onChange={() => setRequestType("individual")}
                  className={styles.radio}
                />
                {t("individual")}
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="requestType"
                  value="corporate"
                  checked={requestType === "corporate"}
                  onChange={() => setRequestType("corporate")}
                  className={styles.radio}
                />
                {t("corporate")}
              </label>
            </div>
          </div>

          {/* Şirket Adı Alanı */}
          {requestType === "corporate" && (
            <div className={styles.inputGroup}>
              <label htmlFor="companyName" className={styles.label}>{t("companyName")}</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className={styles.input}
                required
              />
            </div>
          )}

          <div className={styles.inputGroup}>
            <label htmlFor="description" className={styles.label}>{t("description")}</label>
            <textarea id="description" name="description" className={styles.textarea} rows={4}></textarea>
          </div>
          <button type="submit" className={styles.button}>
            {t("submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DemoPage;
