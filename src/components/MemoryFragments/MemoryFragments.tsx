"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./MemoryFragments.module.css";
import { memoryFragments } from "./MemoryList";

export default function MemoryFragments() {
  const [language, setLanguage] = useState<"en" | "pt">("pt");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  };

  return (
    <div className={styles["memory-container"]}>
      <header className={styles["memory-header"]}>
        <h2>Frases que me inspiraram ou achei foda</h2>

        <button
          className={styles["translate-btn"]}
          onClick={toggleLanguage}
          aria-label="Alternar idioma"
        >
          
          <Image 
            src="/images/icons/globe.svg" 
            alt="" 
            width={16} 
            height={16} 
            className={styles["globe-icon"]}
          />
          <span>{language === "en" ? "PT-BR" : "EN"}</span>
        </button>
      </header>

      <div className={styles["memory-content"]}>
        {memoryFragments.map((fragment, index) => (
          <div
            key={index}
            className={styles["memory-item"]}
            style={
              { "--bg-image": `url(${fragment.image})` } as React.CSSProperties
            }
          >
            <p>&quot;{fragment[language]}&quot;</p>
          </div>
        ))}
      </div>
    </div>
  );
}