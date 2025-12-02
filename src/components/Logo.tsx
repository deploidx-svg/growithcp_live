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

  const textSizeMap = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/cploicon copy.png"
        alt="growthcp"
        className={`${sizeMap[size]} w-auto`}
      />

      {showText && (
        <div className={`font-bold tracking-tight ${textSizeMap[size]} text-slate-900`}>
          growthcp
        </div>
      )}
    </div>
  );
}

export default Logo;
