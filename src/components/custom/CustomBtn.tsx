import type { Icon } from "@phosphor-icons/react";
import { buttonVariants, Button as ShadButton } from "../ui/button";
import type { VariantProps } from "class-variance-authority";
import SpinningLoader from "./spinning-loader";

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface ButtonProps {
  text?: string;
  startIcon?: Icon;
  onClick?: () => void;
  variant?: ButtonVariantProps["variant"];
  size?: ButtonVariantProps["size"];
  loading?: boolean;
}

const CustomBtn = ({
  startIcon: IconComponent,
  text,
  onClick,
  variant,
  size,
  loading,
}: ButtonProps) => {
  return (
    <ShadButton
      size={size}
      variant={variant}
      onClick={onClick}
      className="gap-2"
    >
      {IconComponent && !loading && <IconComponent size={18} />}
      {loading && <SpinningLoader />}
      {text}
    </ShadButton>
  );
};

export default CustomBtn;
