import React from 'react';

type InputProps = {
  as?: 'input' | 'textarea';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  icon?: string; // Optional image or icon URL
  buttonText?: string;
  onButtonClick?: () => void;
  type?: string;
  className?: string;
  rows?: number; // Only for textarea
  name:string;
};

const Input = ({
  as = 'input',
  placeholder,
  value,
  onChange,
  icon,
  buttonText,
  onButtonClick,
  type = 'text',
  className = '',
  rows = 4,
  name
}: InputProps) => {
  const baseClass = `flex items-center border border-gray-300 rounded-md px-3 py-2 gap-2 ${className}`;

  const sharedProps = {
    placeholder,
    name,
    value,
    onChange,
    className: 'flex-1 outline-none bg-transparent w-full text-white',
  };

  return (
    <div className={baseClass}>
      {/* Icon/Image */}
      {icon && (
        <img src={icon} alt="icon" className="w-5 h-5 object-contain" />
      )}

      {/* Input or Textarea */}
      {as === 'textarea' ? (
        <textarea rows={rows} {...sharedProps} />
      ) : (
        <input type={type} {...sharedProps} />
      )}

      {/* Optional Button */}
      {buttonText && (
        <button
          type="button"
          onClick={onButtonClick}
          className="bg-purple-500 text-white px-3 py-1 rounded-md text-sm font-poppins"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Input;
