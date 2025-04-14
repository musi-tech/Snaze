import React from "react";

const Input = ({ label, id, type = "text", placeholder, value, onChange, required }) => {
  return (
    <div className="w-full mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-200 text-gray-900 bg-white placeholder-gray-400"
      />
    </div>
  );
};

export default Input;
