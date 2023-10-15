import { forwardRef } from "react";

const Select = forwardRef(function Select(
  { options, className, onChange },
  ref
) {
  return (
    <select
      ref={ref}
      className={`px-4 py-2 rounded-md focus-visible:outline-none
     focus-visible:outline-blue-900 ${className} capitalize`}
      onChange={onChange}
    >
      {options.map((opt) => (
        <option key={opt.value} selected={opt.default} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
});

export default Select;
