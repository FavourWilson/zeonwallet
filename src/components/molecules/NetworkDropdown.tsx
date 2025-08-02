// components/NetworkDropdown.tsx
import { useState } from "react";

interface NetworkDropdownProps {
  selected: string;
  onSelect: (value: string) => void;
}
const NetworkDropdown = ({ selected, onSelect }: NetworkDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };


  return (
    <div className="relative inline-block text-left">
      {/* Dropdown button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-500 text-white font-medium px-4 py-2 rounded-full flex items-center gap-2"
      >
        {selected}
        <span className="text-xs">▼</span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute mt-2 w-32 bg-gray-700 text-white rounded-xl p-3 shadow-lg z-50">
          <button
            className="block w-full text-left font-normal active:font-bold py-1 hover:text-gray-300"
            onClick={() => handleSelect("All Network")}
          >
           All Network
          </button>
          <button
            className="block w-full text-left font-normal active:font-bold py-1 hover:text-gray-300"
            onClick={() => handleSelect("Native")}
          >
            Native
          </button>
          <button
            className="block w-full text-left font-normal active:font-bold py-1 hover:text-gray-300"
            onClick={() => handleSelect("Stable")}
          >
            Stable
          </button>
        </div>
      )}
    </div>
  );
};

export default NetworkDropdown;
