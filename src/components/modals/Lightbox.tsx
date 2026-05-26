import { useEffect, useRef } from "react";
import { useModal } from "../../context/ModalContext";

export default function Lightbox() {
  const { lightboxOpen, lightboxData, closeLightbox } = useModal();
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => {
        if (imgRef.current) {
          imgRef.current.style.transform = "scale(1)";
        }
      });
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const handleBgClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  const handleClose = () => {
    if (imgRef.current) {
      imgRef.current.style.transform = "scale(0.95)";
    }
    closeLightbox();
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightboxOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen]);

  if (!lightboxData) {
    return (
      <div
        id="lightbox"
        className="fixed inset-0 z-[2000] bg-[rgba(1,9,20,0.96)] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-400 backdrop-blur-2xl"
        style={{ transition: "opacity 0.4s ease" }}
      />
    );
  }

  return (
    <div
      id="lightbox"
      className="fixed inset-0 z-[2000] bg-[rgba(1,9,20,0.96)] flex items-center justify-center backdrop-blur-2xl"
      style={{ opacity: lightboxOpen ? 1 : 0, transition: "opacity 0.4s ease" }}
      onClick={handleBgClick}
    >
      <button
        className="absolute top-5 right-5 w-10 h-10 rounded-full border border-[rgba(123,147,168,0.15)] bg-[rgba(1,9,20,0.4)] backdrop-blur-md flex items-center justify-center text-text-dim text-lg cursor-pointer transition-all duration-300 hover:text-white hover:border-white z-10"
        onClick={handleClose}
      >
        &times;
      </button>
      <div className="flex items-center justify-center w-[90vw] h-[86vh] relative">
        <img
          ref={imgRef}
          src={lightboxData.src}
          alt={lightboxData.alt}
          className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
          style={{ transform: "scale(0.95)", transition: "transform 0.5s ease-out" }}
        />
      </div>
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text-dim text-[0.7rem] font-mono tracking-[0.06em] px-4 py-1.5 rounded-full bg-[rgba(1,9,20,0.4)] backdrop-blur-md border border-[rgba(123,147,168,0.1)] whitespace-nowrap z-10">
        {lightboxData.caption}
      </p>
    </div>
  );
}
