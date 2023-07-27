"use client";
import { CarProps } from "@/types";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
interface CarDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  car: CarProps;
}
const CarDetails = ({ isOpen, closeModel, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModel}>
          <Transition.Child
            leaveTo="opacity-0"
            leaveFrom="opacity-100"
            leave="ease-in duration-200"
            enterTo="opacity-100"
            enterFrom="opacity-0"
            enter="ease-out duration-300"
            as={Fragment}
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                leaveTo="opacity-0"
                leaveFrom="opacity-100"
                leave="ease-in duration-200"
                enterTo="opacity-100 scale-100"
                enterFrom="opacity-0 scale-95"
                enter="ease-out duration-300"
                as={Fragment}
              ></Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
