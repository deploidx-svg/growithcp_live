interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
}

function Logo({ size = 'medium', showText = true, className = '' }: LogoProps) {
  const sizeMap = {
    small: 'h-8',
    medium: 'h-10',
    large: 'h-16'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/grologo-removebg-preview.png"
        alt="GrowithCP"
        className={`${sizeMap[size]} w-auto`}
      />

      {showText && (
        <div className="font-bold tracking-tight text-xl text-slate-900">
          GrowithCP
        </div>
      )}
    </div>
  );
}

export default Logo;
