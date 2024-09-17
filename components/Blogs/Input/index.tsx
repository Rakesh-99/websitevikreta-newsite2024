import React from "react";

interface InputProps {
  className?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  label?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  shape?: "square";
  size?: "xs" | "md";
  variant?: "fill";
  color?: "white" | "dark_3";
  [key: string]: any;  // To allow any additional props
}

const shapes = { square: "input-square" };
const variants = { fill: { dark_3: "input-fill-dark_3" } };
const sizes = {
  xs: "input-xs",
  md: "input-md",
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "",
      color = "",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${className} input-label ${shape && shapes[shape]} ${
          variant && (variants[variant]?.[color] || variants[variant])
        } ${size && sizes[size]}`}
      >
        {!!label && label} {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />
        {!!suffix && suffix}
      </label>
    );
  }
);

Input.displayName = "Input";
export { Input };
