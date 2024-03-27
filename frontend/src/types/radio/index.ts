export interface RadioOption {
  value: string;
  label: string;
}

export interface RadioButtonsProps {
  options: RadioOption[];
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
}
