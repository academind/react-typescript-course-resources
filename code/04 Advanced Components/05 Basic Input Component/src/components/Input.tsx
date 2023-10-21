type InputProps = {
  label: string;
  id: string;
}

export default function Input({label, id}: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" />
    </p>
  );
}
