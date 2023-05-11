import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const cardStyles = cva("rounded-lg shadow-lg p-8 mb-8", {
  variants: {
    intent: {
      primary: "bg-rose-50",
      danger: "bg-red-400",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export interface CardProps
  extends ComponentProps<"div">,
    VariantProps<typeof cardStyles> {}

export const Card: React.FC<CardProps> = ({
  className,
  intent,
  children,
  ...props
}) => (
  <div className={cardStyles({ intent, className })} {...props}>
    {children}
  </div>
);
