import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
}
export const Button = ({ children }: IButton) => {
  return <button>{children}</button>;
};
