import { MouseEventHandler } from "react";
export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit"  ;
}
export interface SearchManfucturerProps {
  manfucturer: string;
  setManfucturer: (manfucturer: string) => void
}