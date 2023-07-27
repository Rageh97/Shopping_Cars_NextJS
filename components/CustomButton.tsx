"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  type,
  textStyles,
  rightIcon,
  isDisabled
}: CustomButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
      type={"button" || type}
      disabled={false}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="right icon" fill className="object-contain"/>
      </div>
    )}
    </button>
  );
};

export default CustomButton;
