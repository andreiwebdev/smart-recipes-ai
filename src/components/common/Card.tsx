import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  extraClasses?: string;
}

export const Card = ({ children, extraClasses = "" }: CardProps) => {
  return (
    <div
      className={`bg-card shadow-lg rounded-lg p-6 w-full max-w-md mx-auto lg:max-w-lg ${extraClasses}`}
    >
      {children}
    </div>
  );
};
