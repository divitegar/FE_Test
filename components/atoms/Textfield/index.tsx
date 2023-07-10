import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function Textfield(props: InputProps) {
  const { label, ...nativeProps } = props;
  return (
    <div className="flex flex-col">
      <label
        htmlFor="name"
        className="text-lg"
      >
        {label}
      </label>
      <input
        className="outline-none border-2 border-black rounded-lg p-2"
        aria-describedby="name"
        {...nativeProps}
      />
    </div>
  );
}
