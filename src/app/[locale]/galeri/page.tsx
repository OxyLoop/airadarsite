"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Hero from "../components/Hero";
import styles from "../styles/Gallery.module.css";
import { useTranslations } from "next-intl";

const images = [
  { src: "/gallery/feature1.jpg", alt: "Ekran Görüntüsü 1" },
  { src: "/gallery/feature2.webp", alt: "Ekran Görüntüsü 2" },
  { src: "/gallery/feature3.webp", alt: "Ekran Görüntüsü 3" },
  { src: "/gallery/feature4.webp", alt: "Ekran Görüntüsü 4" },
  { src: "/gallery/feature5.webp", alt: "Ekran Görüntüsü 5" },
  { src: "/gallery/feature6.jpg", alt: "Ekran Görüntüsü 6" },
];

export default function GalleryPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations("gallery");

  const close = useCallback(() => setOpenIndex(null), []);
  const open = (idx: number) => setOpenIndex(idx);

  // Esc ile kapat
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    // body scroll kilitle
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close]);

  return (
    <main>
      <Hero backgroundImage="/feature2.webp" namespace="galleryHero" />

      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t("title")}</h2>

          <div className={styles.grid}>
          {images.map((image, index) => (
            <button
              key={index}
              className={styles.gridItem}
              onClick={() => open(index)}
              aria-label={`${image.alt} büyük görseli aç`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className={styles.image}
              />
            </button>
          ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          className={styles.lightboxOverlay}
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={close}
              aria-label="Kapat"
            >
              ✕
            </button>

            {/* Büyük görsel (contain) */}
            <Image
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              fill
              className={styles.lightboxImage}
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </main>
  );
}
