import { useEffect, useRef } from "react";
import { useModal } from "../../context/ModalContext";

export default function VideoModal() {
  const { videoOpen, videoData, closeVideo } = useModal();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoOpen) {
      document.body.style.overflow = "hidden";
      if (videoRef.current) {
        videoRef.current.load();
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [videoOpen]);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute("src");
    }
    closeVideo();
  };

  const handleBgClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && videoOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [videoOpen]);

  if (!videoData) {
    return (
      <div
        id="videoModal"
        className="fixed inset-0 z-[2000] bg-[rgba(1,9,20,0.96)] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-400 backdrop-blur-2xl"
        style={{ transition: "opacity 0.4s ease" }}
      />
    );
  }

  return (
    <div
      id="videoModal"
      className="fixed inset-0 z-[2000] bg-[rgba(1,9,20,0.96)] flex items-center justify-center backdrop-blur-2xl"
      style={{ opacity: videoOpen ? 1 : 0, transition: "opacity 0.4s ease" }}
      onClick={handleBgClick}
    >
      <button
        className="absolute top-5 right-5 w-10 h-10 rounded-full border border-[rgba(123,147,168,0.15)] bg-[rgba(1,9,20,0.4)] backdrop-blur-md flex items-center justify-center text-text-dim text-lg cursor-pointer transition-all duration-300 hover:text-white hover:border-white z-10"
        onClick={handleClose}
      >
        &times;
      </button>
      <div className="w-[88vw] max-w-[1100px]">
        <video
          ref={videoRef}
          controls
          playsInline
          preload="none"
          className="w-full block rounded-sm shadow-2xl"
        >
          <source src={videoData.src} type="video/mp4" />
        </video>
      </div>
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text-dim text-[0.7rem] font-mono tracking-[0.06em] px-4 py-1.5 rounded-full bg-[rgba(1,9,20,0.4)] backdrop-blur-md border border-[rgba(123,147,168,0.1)] whitespace-nowrap z-10">
        {videoData.caption}
      </p>
    </div>
  );
}
