import type { ReactNode } from 'react';

type ITypography = {
  value: 'Heading' | 'content' | 'subtitle';
  size:  number;
  color?: string; // optional, since you might use multiple colors inside
  children: ReactNode;
  className?: string;
};

const Typography = ({ value, size, color = 'white', children, className }: ITypography) => {
  const style = {
    fontSize: typeof size === 'number' ? `${size}px` : undefined,
    color,
  };

  switch (value) {
    case 'Heading':
      return <h1 style={style} className={className}>{children}</h1>;
    case 'content':
      return <p style={style} className={className}>{children}</p>;
    case 'subtitle':
      return <span style={style} className={className}>{children}</span>;
    default:
      return <span style={style} className={className}>{children}</span>;
  }
};

export default Typography;
