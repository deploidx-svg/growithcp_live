interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 ${
        hover ? 'hover:bg-white/10 transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default GlassCard;
