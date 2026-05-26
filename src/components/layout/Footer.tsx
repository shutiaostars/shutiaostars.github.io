export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-[rgba(123,147,168,0.06)]">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.25rem,4vw,3rem)] py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[0.6rem] tracking-[0.12em] text-text-faint">
          &copy; 2026 薯条stars · 贺意
        </p>
        <p className="font-display text-sm italic text-text-faint">
          &quot;We are all made of star-stuff.&quot; — Carl Sagan
        </p>
      </div>
    </footer>
  );
}
