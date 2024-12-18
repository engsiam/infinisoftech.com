"use client";

import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";

interface InputFieldProps {
  label?: string; // Optional label
  type: "text" | "textarea" | "select" | "email"; // Supported types
  placeholder?: string; // Placeholder text
  name: string; // Input name
  options?: { value: string; label: string }[]; // Dropdown options for select
}

// Merge input attributes for reusability
type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;
type NativeTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
type NativeSelectProps = SelectHTMLAttributes<HTMLSelectElement>;

const InputField = ({
  label,
  type,
  placeholder,
  name,
  options,
  ...rest
}: InputFieldProps & NativeInputProps & NativeTextareaProps & NativeSelectProps) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block text-[#737373] font-medium mb-1">
          {label}
        </label>
      )}

      {/* Render a textarea */}
      {type === "textarea" && (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          className="w-full h-[120px] border border-gray-300 px-3 py-2 rounded-md focus:outline-pink-600 text-[#737373]"
          {...rest}
        />
      )}

      {/* Render a select dropdown */}
      {type === "select" && options && (
        <select
          id={name}
          name={name}
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-pink-600 text-[#737373]"
          {...rest}
        >
          <option value="" disabled>
            {placeholder || "Please Select"}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}

      {/* Render an input field */}
      {type !== "textarea" && type !== "select" && (
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-pink-600 text-[#737373]"
          {...rest}
        />
      )}
    </div>
  );
};

export default InputField;
