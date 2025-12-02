interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
}

function Logo({ size = 'medium', showText = true, className = '' }: LogoProps) {
  const sizeMap = {
    small: 'w-8 h-8',
    medium: 'w-10 h-10',
    large: 'w-16 h-16'
  };

  const textSizeMap = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        className={sizeMap[size]}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 10L80 30L80 60L50 80L20 60L20 30L50 10Z"
          stroke="#FF4757"
          strokeWidth="4"
          fill="none"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M50 35C57.7 35 64 41.3 64 49C64 56.7 57.7 63 50 63C42.3 63 36 56.7 36 49C36 41.3 42.3 35 50 35Z"
          fill="#FF4757"
        />
        <path
          d="M30 70L35 82L40 78M70 70L65 82L60 78"
          stroke="#FF4757"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {showText && (
        <div className={`font-bold tracking-tight ${textSizeMap[size]} text-slate-900`}>
          growthcp
        </div>
      )}
    </div>
  );
}

export default Logo;
