"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book, or rent a car - quickly and easily
        </h1>
        <p className="hero__subtitle">
          streamline your rental experience with our effortles booking process.
        </p>
        <CustomButton
          handleClick={handleScroll}
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          title="Explore Cars"
        />
      </div>
      <div className="hero__image__container">
        <div className="hero__image">
          <Image src="/hero.png" fill alt="hero" className="object-contain" />
          <div className="hero__image-overlay"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;