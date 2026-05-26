interface StatBlockProps {
  value: string;
  label: string;
}

export default function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="text-center">
      <p className="font-display text-3xl text-star mb-1">{value}</p>
      <p className="font-mono text-[0.6rem] tracking-[0.12em] text-text-dim">{label}</p>
    </div>
  );
}
