import React, {useEffect, useState} from "react";
import "./ProjectModal.scss";

/* 專案詳細資訊彈出視窗：可捲動的文字說明 + 可左右切換的照片 */
export default function ProjectModal({project, onClose}) {
  const images =
    project.images && project.images.length > 0
      ? project.images
      : project.image
      ? [project.image]
      : [];
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setIndex(i => (i + 1) % images.length);

  useEffect(() => {
    // 打開時鎖住背景頁面的捲動
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 鍵盤：Esc 關閉、左右鍵切換照片
    const onKey = e => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && images.length > 1) {
        setIndex(i => (i - 1 + images.length) % images.length);
      }
      if (e.key === "ArrowRight" && images.length > 1) {
        setIndex(i => (i + 1) % images.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, images.length]);

  return (
    <div className="pm-backdrop" onClick={onClose}>
      <div
        className="pm-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={project.projectName}
        onClick={e => e.stopPropagation()}
      >
        <button className="pm-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="pm-scroll">
          <h2 className="pm-title">{project.projectName}</h2>
          {project.meta && <p className="pm-meta">{project.meta}</p>}

          {images.length > 0 && (
            <div className="pm-carousel">
              <img
                className="pm-image"
                src={images[index]}
                alt={`${project.projectName} ${index + 1}`}
              />
              {images.length > 1 && (
                <>
                  <button
                    className="pm-arrow pm-arrow-left"
                    onClick={prev}
                    aria-label="Previous photo"
                  >
                    ‹
                  </button>
                  <button
                    className="pm-arrow pm-arrow-right"
                    onClick={next}
                    aria-label="Next photo"
                  >
                    ›
                  </button>
                  <div className="pm-dots">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        className={i === index ? "pm-dot active" : "pm-dot"}
                        onClick={() => setIndex(i)}
                        aria-label={`Photo ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {project.details &&
            project.details.map((section, i) => (
              <div className="pm-section" key={i}>
                <h3 className="pm-heading">{section.heading}</h3>
                {section.text && <p className="pm-text">{section.text}</p>}
                {section.bullets && (
                  <ul className="pm-list">
                    {section.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

          {project.footerLink && project.footerLink.length > 0 && (
            <div className="pm-links">
              {project.footerLink.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name} ›
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}