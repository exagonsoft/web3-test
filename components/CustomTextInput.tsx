import React from "react";

const TextInput = ({
  id,
  label,
  type = "text",
  value,
  onChange,
}: {
  id: string;
  label?: string;
  type: string;
  value: string;
  onChange: (e: { target: { value: React.SetStateAction<string> } }) => void;
}) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label className="text-[.9rem] font-bold">{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="rounded-md p-2"
      />
    </div>
  );
};

export default TextInput;
