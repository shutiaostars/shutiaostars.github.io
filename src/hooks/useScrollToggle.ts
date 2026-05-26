import { useEffect, useState } from "react";

export function useScrollToggle(threshold = 60) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handler = () => setActive(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return active;
}
