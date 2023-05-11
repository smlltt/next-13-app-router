import { cva, VariantProps } from "class-variance-authority";
import { ButtonOrLink, Props as ButtonOrLinkProps } from "./ButtonOrLink";

const buttonStyles = cva(
  "flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80",
  {
    variants: {
      intent: {
        primary: "bg-rose-500 text-white",
        secondary:
          "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500",
        danger: "bg-red-500 text-white focus:ring-red-500",
      },
      outline: {
        true: "bg-transparent border",
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      intent: "primary",
      fullWidth: false,
      size: "medium",
    },
    compoundVariants: [
      {
        intent: "primary",
        outline: true,
        className: "text-rose-500 border-rose-300 border-2",
      },
      {
        intent: "danger",
        outline: true,
        className: "text-red-600 border-red-500 border-2",
      },
    ],
  }
);

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

export function Button({ intent, fullWidth, size, outline, ...props }: Props) {
  return (
    <ButtonOrLink
      className={buttonStyles({ intent, fullWidth, outline, size })}
      {...props}
    />
  );
}
