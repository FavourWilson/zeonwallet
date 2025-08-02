
import type { IconType } from "react-icons";

interface IconWrapperProps {
  icon?: IconType; 
  size?: number | string;
  color?: string;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, size = 20, color = "white", className = "" }) => {
  if (!Icon) return null;

  const pixelSize = typeof size === "number" ? `${size}px` : size;

  return <Icon className={className} style={{ width: pixelSize, height: pixelSize, color }} />;
};

export default IconWrapper;
