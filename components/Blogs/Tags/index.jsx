import React from "react";
import PropTypes from "prop-types";  // Import your new SCSS file here

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  variant = "fill",
  size = "sm",
  color = "dark_3",
  ...restProps
}) => {
  return (
    <button
      className={`tag ${shape} ${size} ${variant} ${color} ${className}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon} {children} {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["lg", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["design2022_yellow_#ffd600", "dark_3"]),
};

export { Button };
