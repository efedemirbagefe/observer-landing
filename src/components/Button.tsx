import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "accent" | "ghost";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
};

export default function Button({
  variant = "accent",
  className = "",
  children,
  ...rest
}: Props) {
  const cls = variant === "accent" ? "btn-accent" : "btn-ghost";
  return (
    <a className={`${cls} ${className}`.trim()} {...rest}>
      {children}
    </a>
  );
}
