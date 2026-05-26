import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

interface LightboxData {
  src: string;
  alt: string;
  caption: string;
}

interface VideoData {
  src: string;
  caption: string;
}

interface ModalContextValue {
  lightboxOpen: boolean;
  lightboxData: LightboxData | null;
  openLightbox: (data: LightboxData) => void;
  closeLightbox: () => void;
  videoOpen: boolean;
  videoData: VideoData | null;
  openVideo: (src: string, caption: string) => void;
  closeVideo: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  const openLightbox = useCallback((data: LightboxData) => {
    setLightboxData(data);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxData(null);
  }, []);

  const openVideo = useCallback((src: string, caption: string) => {
    setVideoData({ src, caption });
  }, []);

  const closeVideo = useCallback(() => {
    setVideoData(null);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        lightboxOpen: lightboxData !== null,
        lightboxData,
        openLightbox,
        closeLightbox,
        videoOpen: videoData !== null,
        videoData,
        openVideo,
        closeVideo,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
