import { forwardRef } from "react";

const Select = forwardRef(function Select(
  { options, className, handleCategoryChange },
  ref
) {
  return (
    <select
      ref={ref}
      className={`px-4 py-2 rounded-md focus-visible:outline-none
     focus-visible:outline-blue-900 ${className} capitalize`}
      onChange={handleCategoryChange}
    >
      <option value="">--- Select Category ---</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
});

export default Select;
