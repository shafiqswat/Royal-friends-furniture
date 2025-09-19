/** @format */

"use client";

export default function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = "",
  options = [],
  className = "",
  rows = 4,
}) {
  return (
    <div className={className}>
      {label ? (
        <label className='block text-sm font-medium text-wood-ebony mb-2'>
          {label}
          {required && <span className='text-red-500 ml-1'>*</span>}
        </label>
      ) : null}

      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood-oak focus:border-transparent transition-all duration-300'>
          <option value=''>{placeholder}</option>
          {options.map((option) => (
            <option
              key={option}
              value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows={rows}
          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood-oak focus:border-transparent transition-all duration-300 resize-none'
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood-oak focus:border-transparent transition-all duration-300'
        />
      )}
    </div>
  );
}
