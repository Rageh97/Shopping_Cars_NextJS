"use client";

import Image from "next/image";
import { SearchManufacturer } from ".";
import React, { useState } from "react";
import { manufacturers } from "./../constants/index";
import { useRouter } from "next/navigation";
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt="magnifying"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);
const Searchbar = () => {
  const router = useRouter();
  const [model, setModel] = useState("");
  const [manfucturer, setManfucturer] = useState("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manfucturer === "" && model === "") {
    }
    updateSearchParams(model.toLowerCase(), manfucturer.toLowerCase());
  };
  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.href);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manfucturer) {
      searchParams.set("manufacturer", manfucturer);
    } else {
      searchParams.delete("manufacturer");
    }
    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };
  return (
    <form onSubmit={handleSearch} className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer
          manfucturer={manfucturer}
          setManfucturer={setManfucturer}
        />
        <SearchButton otherClasses={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <Image
          src={"/model-icon.png"}
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max:hidden" />
    </form>
  );
};

export default Searchbar;
