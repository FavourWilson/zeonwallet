type ImageSizeProps = {
  src: string;
  value?: "base" | "MD" | "LG" | "XL"; // Optional
  width?: number;
  height?: number;
  alt?: string;
};

const Imagesize: React.FC<ImageSizeProps> = ({
  src,
  value,
  width,
  height,
  alt = "image"
}) => {
  // Fallback className if `value` is used
  let className = "";

  if (value) {
    switch (value) {
      case "base":
        className = "w-24 h-auto";
        break;
      case "MD":
        className = "w-32 h-auto";
        break;
      case "LG":
        className = "w-40 h-auto";
        break;
      case "XL":
        className = "w-48 h-auto";
        break;
    }
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width} // If width is passed manually
      height={height}
      className={`object-contain ${!width && !height ? className : ""}`}
    />
  );
};


export default Imagesize;
