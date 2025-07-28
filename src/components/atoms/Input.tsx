import React from 'react';

type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: string; // URL to icon/image
  buttonText?: string;
  onButtonClick?: () => void;
  type?: string;
  className?: string;
  name:string;
};

const Input = ({
  placeholder,
  value,
  onChange,
  icon,
  buttonText,
  onButtonClick,
  type = 'text',
  className = '',
  name
}: InputProps) => {
  return (
    <div className={`flex items-center border border-purple rounded-md px-3 py-2 gap-2 ${className}`}>
      {/* Icon/Image */}
      {icon && (
        <img src={icon} alt="icon" className="w-5 h-5 object-contain" />
      )}

      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className="flex-1 outline-none bg-transparent"
      />

      {/* Button */}
      {buttonText && (
        <button
          type="button"
          onClick={onButtonClick}
          className="bg-purple-500 text-white px-3 py-1 rounded-md text-sm"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Input;
