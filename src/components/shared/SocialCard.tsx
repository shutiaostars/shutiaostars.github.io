interface SocialCardProps {
  name: string;
  account: string;
  url: string;
  bgColor: string;
  hoverBorderColor: string;
  hoverBgColor: string;
  icon: React.ReactNode;
}

export default function SocialCard({
  name,
  account,
  url,
  bgColor,
  hoverBorderColor,
  hoverBgColor,
  icon,
}: SocialCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className="social-card group flex flex-col items-center gap-3 px-3 py-5 rounded-sm border border-[rgba(123,147,168,0.1)] bg-deep no-underline transition-all duration-400 hover:-translate-y-1 text-center"
      style={
        {
          "--hover-border": hoverBorderColor,
          "--hover-bg": hoverBgColor,
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = hoverBorderColor;
        el.style.background = hoverBgColor;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(123,147,168,0.1)";
        el.style.background = "#091424";
      }}
    >
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: bgColor }}
      >
        {icon}
      </div>
      <div>
        <p className="font-body text-[0.9rem] text-text-body font-medium leading-tight mb-1">
          {name}
        </p>
        <p className="font-mono text-[0.6rem] text-text-dim tracking-[0.03em] leading-relaxed">
          {account}
        </p>
      </div>
    </a>
  );
}
