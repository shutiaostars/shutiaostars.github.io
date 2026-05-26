import { useEffect, useState } from "react";

export function useParallax(speed = 0.35) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handler = () => setOffset(window.scrollY * speed);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [speed]);
  return { transform: `translateY(${offset}px)` };
}
