interface ExifPillProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
}

export default function ExifPill({ children, variant = "dark" }: ExifPillProps) {
  const lightStyle = {
    color: "rgba(255,255,255,0.4)",
    borderColor: "rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.03)",
  };
  return (
    <span className="exif-pill" style={variant === "light" ? lightStyle : undefined}>
      {children}
    </span>
  );
}
