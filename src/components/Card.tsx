import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`rounded-2xl border border-sage-100 bg-white/70 p-6 shadow-card backdrop-blur transition hover:-translate-y-1 hover:shadow-soft ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
