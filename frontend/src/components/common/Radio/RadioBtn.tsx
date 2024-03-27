'use client';

import type { RadioButtonsProps } from '@/types/radio/index';

const RadioBtn: React.FC<RadioButtonsProps> = ({
  options,
  name,
  selectedValue,
  onChange,
}) => {
  return (
    <ul className="flex grow items-center justify-between">
      {options.map((option) => (
        <li
          key={`${option.label}-${option.value}`}
          className="flex border-1 bg-color-black"
        >
          <label className="inline-flex items-center space-x-2">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="size-5" // Tailwind CSS class
            />
            <span className="text-xs">{option.label}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default RadioBtn;
