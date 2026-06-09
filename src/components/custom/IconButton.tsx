import type { Icon, IconWeight } from "@phosphor-icons/react";
import type { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface ButtonProps {
  tooltip?: string;
  icon?: Icon;
  onClick?: () => void;
  variant?: ButtonVariantProps["variant"];
  weight?: IconWeight;
}

const IconButton = ({
  onClick,
  icon: IconComponent,
  tooltip,
  variant,
  weight = "fill",
}: ButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={onClick} variant={variant} size="icon-lg">
            {IconComponent && <IconComponent size={18} weight={weight} />}
          </Button>
        </TooltipTrigger>

        {tooltip && (
          <TooltipContent className="">
            <p>{tooltip}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export default IconButton;
