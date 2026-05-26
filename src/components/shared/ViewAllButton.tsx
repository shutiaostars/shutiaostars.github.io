interface ViewAllButtonProps {
  open: boolean;
  onClick: () => void;
}

export default function ViewAllButton({ open, onClick }: ViewAllButtonProps) {
  return (
    <div className="text-center mt-10 mb-6 chapter-reveal">
      <button
        onClick={onClick}
        className="inline-flex items-center gap-2 px-7 py-3 bg-transparent border border-[rgba(123,147,168,0.2)] rounded-full text-star text-[0.78rem] tracking-[0.08em] font-body font-medium cursor-pointer transition-all duration-400 hover:bg-star hover:text-cosmos hover:border-star"
      >
        <span>{open ? "收起作品" : "查看全部作品"}</span>
        <span className="font-mono text-base transition-transform duration-400" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
          {open ? "↑" : "↓"}
        </span>
      </button>
    </div>
  );
}
