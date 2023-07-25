"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  type
}: CustomButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
      type={"button" || type}
      disabled={false}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
