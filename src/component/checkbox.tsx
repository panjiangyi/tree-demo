import { MouseEventHandler } from "react";

export const Checkbox: React.FC<{
  checked: boolean;
  onChange: (v: boolean) => void;
  onClick?: MouseEventHandler<HTMLInputElement>;
}> = ({ onClick, checked, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => {
        e.stopPropagation();
        onChange(e.target.checked);
      }}
      onClick={onClick}
    />
  );
};
