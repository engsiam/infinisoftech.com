"use client";

interface InputFieldProps {
  label?: string; // Optional label
  type: "text" | "textarea" | "select" | "email"; // Type options
  placeholder?: string;
  name: string;
  options?: { value: string; label: string }[]; // Dropdown options
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  name,
  options,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block text-[#737373] font-medium mb-1">
          {label}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          className="w-full h-[120px] border border-gray-300 px-3 py-2 rounded-md focus:outline-pink-600 text-[#737373]"
        />
      ) : type === "select" && options ? (
        <select
          id={name}
          name={name}
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-pink-600 text-[#737373]"
        >
          <option value="" disabled selected>
            {placeholder || "Please Select"}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-pink-600 text-[#737373]"
        />
      )}
    </div>
  );
};

export default InputField;
