import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

const variantClasses = {
  primary: "bg-sage-500 text-white hover:bg-sage-600 active:scale-[0.98]",
  secondary:
    "border border-sage-200 bg-white text-charcoal hover:border-sage-300 hover:text-sage-700 active:scale-[0.98]",
  ghost: "text-sage-700 hover:text-sage-600"
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variantClasses;
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: keyof typeof variantClasses;
};

export const Button = ({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props} />
  );
};

export const ButtonLink = ({
  variant = "primary",
  className = "",
  ...props
}: LinkButtonProps) => {
  return (
    <a className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props} />
  );
};
