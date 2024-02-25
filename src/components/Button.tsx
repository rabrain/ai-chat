import { FC, ReactNode } from "react";

interface ButtonProps {
  variants?: "primary" | "secondary" | "outline";
  isFullSize?: boolean;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variants = "primary",
  isFullSize,
  children,
}) => {
  return (
    <button
      className={`btn ${
        variants === "primary"
          ? "btn-primary"
          : variants === "secondary"
          ? "btn-secondary"
          : "btn-outline"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
