import { ArrowRight } from 'lucide-react';

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
}

function GlassButton({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon = false,
}: GlassButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-lg';

  const variants = {
    primary: 'bg-maroon-700 text-white hover:bg-maroon-600 shadow-lg hover:shadow-maroon-700/30',
    secondary: 'glass text-gray-900 hover:bg-maroon-100/40',
    outline: 'border-2 border-maroon-700 text-maroon-700 hover:bg-maroon-50',
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {icon && <ArrowRight className="w-5 h-5" />}
    </Component>
  );
}

export default GlassButton;
