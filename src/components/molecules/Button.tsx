import { NavLink } from "react-router";
import { FaCheck } from "react-icons/fa6";

type IButton = {
  variant: 'bordered' | 'filled';
  width: 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | number;
  value: string;
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  checked?: boolean;
};

const widthMap: Record<string, string> = {
  sm: 'w-24',
  lg: 'w-36',
  xl: 'w-48',
  '2xl': 'w-60',
  '3xl': 'w-72',
};

const Button = ({
  variant,
  width,
  value,
  href,
  to,
  onClick,
  type = 'button',
  target,
  rel,
  checked = false,
}: IButton) => {
  const widthClass = typeof width === 'number' ? '' : widthMap[width];
  const inlineStyle = typeof width === 'number' ? { width: `${width}px` } : undefined;

  const base = `inline-flex items-center justify-center ${widthClass} font-semibold`;
  const styles =
    variant === 'bordered'
      ? 'border border-purple-500 text-purple-500 bg-transparent px-3 py-2 rounded-xl'
      : 'bg-purple-500 text-white px-3 py-2 rounded-xl';

  const className = `${base} ${styles}`;

  const content = (
    <>
      {checked && <FaCheck color="white" className="w-4 h-4 mr-1" />}
      {value}
    </>
  );

  if (to) {
    return (
      <NavLink to={to} className={className} style={inlineStyle}>
        {content}
      </NavLink>
    );
  }

  if (href) {
    return (
      <a href={href} className={className} target={target} rel={rel} style={inlineStyle}>
        {content}
      </a>
    );
  }

  return (
    <button className={className} style={inlineStyle} type={type} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
