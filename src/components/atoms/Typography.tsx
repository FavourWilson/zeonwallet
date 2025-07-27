import type { ReactNode } from 'react';

type ITypography = {
  value: 'Heading' | 'content' | 'subtitle';
  size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | number;
  color?: string; // optional, since you might use multiple colors inside
  children: ReactNode;
  className?: string;
};

const Typography = ({ value, size, color = 'white', children, className }: ITypography) => {
  const baseClass = `text-${typeof size === 'number' ? size : size} text-${color} ${className}`;

  switch (value) {
    case 'Heading':
      return <h1 className={baseClass}>{children}</h1>;
    case 'content':
      return <p className={baseClass}>{children}</p>;
    case 'subtitle':
      return <span className={baseClass}>{children}</span>;
    default:
      return <span className={baseClass}>{children}</span>;
  }
};

export default Typography;
