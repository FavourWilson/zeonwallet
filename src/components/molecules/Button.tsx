import { NavLink } from "react-router";
import { FaCheck } from "react-icons/fa6";


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
  checked?: boolean;
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
  checked = false
}: IButton) => {
  const base = `inline-flex items-center justify-center w-${width} h-${height} rounded-md font-semibold`;
  const styles =
    variant === 'bordered'
      ? 'border border-purple-500 text-white bg-transparent px-3 py-2 rounded-xl'
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

  if(checked){
    return(
      <button className={`${base} ${styles}`}>
      {checked && <FaCheck color="white" className="w-4 h-4" />}
      {value}
    </button>
    )
  }

  // Default button behavior
  return (
    <button className={className} type={type} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
