import type { ComponentPropsWithoutRef } from 'react';

// Setting up InputProps that contain the default <input> props as well as some custom props (label, id)
type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
}
