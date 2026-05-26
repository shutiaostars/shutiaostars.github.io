import { useScrollToggle } from "../../hooks/useScrollToggle";
import { navItems } from "../../data/navigation";

export default function Navbar() {
  const scrolled = useScrollToggle(60);

  return (
    <nav
      className={`nav-transparent fixed top-0 left-0 right-0 z-[1000] h-16 flex items-center ${
        scrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto w-full px-[clamp(1.25rem,4vw,3rem)] flex items-center justify-between">
        <a
          href="#"
          className="font-display text-lg font-normal text-star tracking-[0.04em] no-underline italic"
        >
          薯条stars
        </a>
        <ul className="hidden md:flex gap-8 list-none">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="no-underline text-text-dim text-[0.72rem] tracking-[0.12em] uppercase font-mono transition-colors duration-300 hover:text-star"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
