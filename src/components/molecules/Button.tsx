import { NavLink } from "react-router";


type IButton = {
  variant: 'bordered' | 'filled';
  width: 'sm'|'lg'|'xl'|'2xl'|'3xl'|number;
  height?: number;
  value: string;
  href?: string; // for external links
  to?: string;   // for internal links (React Router)
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
};

const Button = ({
  variant,
  width,
  height = 48,
  value,
  href,
  to,
  onClick,
  type = 'button',
  target,
  rel,
}: IButton) => {
  const base = `inline-flex items-center justify-center w-${width} h-${height} rounded-md font-semibold`;
  const styles =
    variant === 'bordered'
      ? 'border border-purple-500 text-purple-500 bg-transparent px-3 py-2 rounded-xl'
      : 'bg-purple-500 text-white px-3 py-2 rounded-xl';

  const className = `${base} ${styles}`;

  // If using React Router
  if (to) {
    return (
      <NavLink to={to} className={className}>
        {value}
      </NavLink>
    );
  }

  // If it's an external link
  if (href) {
    return (
      <a href={href} className={className} target={target} rel={rel}>
        {value}
      </a>
    );
  }

  // Default button behavior
  return (
    <button className={className} type={type} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
