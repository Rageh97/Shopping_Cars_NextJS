"use client";
import { SearchManfucturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";
import { useState, Fragment } from "react";
const SearchManufacturer = ({
  manfucturer,
  setManfucturer,
}: SearchManfucturerProps) => {
  const [query, setQuery] = useState("");
  const filtered =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              width={20}
              height={20}
              alt="logo"
              className="ml-4"
              src={"/car-logo.svg"}
            />
          </Combobox.Button>
          <Combobox.Input
            placeholder="volkswag"
            displayValue={(manfucturer: string) => manfucturer}
            className={"search-manufacturer__input"}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            afterLeave={() => setQuery("")}
            leaveTo="opacity-0"
            leaveFrom="opacity-100"
            leave="transition ease-in duration-100"
            as={Fragment}
          >
            <Combobox.Options>
              {filtered.map((item) => (
                <Combobox.Option
                  key={item}
                  value={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white " : "text-gray-900"
                    }`
                  }
                >
                  {item}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
