import React from "react";

type IconComp = React.ComponentType<{ className?: string }>;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  Icon: IconComp;
}

export default function InputWithIcon({
  id,
  label,
  Icon,
  className = "",
  ...inputProps
}: Props) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          id={id}
          className={`w-full h-10 rounded-md ring-1 ring-gray-200 focus:ring-2 focus:ring-emerald-500/60 pl-9 pr-3 text-sm placeholder:text-xs placeholder:text-gray-400 ${className}`}
          {...inputProps}
        />
      </div>
    </div>
  );
}
