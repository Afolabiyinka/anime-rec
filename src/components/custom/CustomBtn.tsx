import type { Icon } from "@phosphor-icons/react";
import { buttonVariants, Button as ShadButton } from "../ui/button";
import type { VariantProps } from "class-variance-authority";

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface ButtonProps {
  text?: string;
  startIcon?: Icon;
  onClick?: () => void;
  variant?: ButtonVariantProps["variant"];
  size?: ButtonVariantProps["size"];
}

const CustomBtn = ({
  startIcon: IconComponent,
  text,
  onClick,
  variant,
  size,
}: ButtonProps) => {
  return (
    <ShadButton
      size={size}
      variant={variant}
      onClick={onClick}
      className="gap-2"
    >
      {IconComponent && <IconComponent size={18} />}
      {text}
    </ShadButton>
  );
};

export default CustomBtn;
