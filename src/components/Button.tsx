import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void; // 🟢 Lägg till onClick som en prop
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};
