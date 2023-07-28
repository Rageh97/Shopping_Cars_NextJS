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
                leaveTo="opacity-0 scale-95"
                leaveFrom="opacity-100 scale-100"
                leave="ease-in duration-200"
                enterTo="opacity-100 scale-100"
                enterFrom="opacity-0 scale-95"
                enter="ease-out duration-300"
                as={Fragment}
              >
                <Dialog.Panel className=" relative p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl text-left shadow-xl translate-all flex flex-col gap-5 bg-white">
                  <button
                    className="absolute top-2 right-2 z-10 w-fit bg-primary-blue-100 rounded-full "
                    type="button"
                    onClick={closeModel}
                  >
                    <Image
                      src={"/close.svgt"}
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3 ">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={"/hero.png"}
                        alt="car model"
                        className="object-contain"
                        fill
                        priority
                      />
                    </div>
                    <div className="flex gap-3 ">
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={"/hero.png"}
                          alt="car model"
                          className="object-contain"
                          fill
                          priority
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={"/hero.png"}
                          alt="car model"
                          className="object-contain"
                          fill
                          priority
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={"/hero.png"}
                          alt="car model"
                          className="object-contain"
                          fill
                          priority
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                      <h2 className="font-semibold text-xl capitalize">{car.make} {car.model}</h2>
                      <div className="mt-3 flex flex-wrap gap-4">
                          {Object.entries(car).map(([key, value]) => (
                            <div key={key} className="flex justify-between gap-5 w-full text-right">
                              <h4 className="text-grey capitalize">{key.split("_").join(" ")}</h4>
                              <p className="text-black-100 font-semibold">{value}</p>
                            </div>
                          ))}
                      </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
