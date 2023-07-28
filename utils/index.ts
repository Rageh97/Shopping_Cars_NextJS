// const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "b7d2ae626amshc2966c521430c77p110255jsn4e2578d3e4a1",
//     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//   },
// };

import { CarProps } from "@/types";

export async function fetchCar() {
  const headers = {
    "X-RapidAPI-Key": "b7d2ae626amshc2966c521430c77p110255jsn4e2578d3e4a1",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const res = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3",
    {
      headers: headers,
    }
  );
  const result = await res.json();
  return result;
}
export const calcCarRent = (city_mpg: number, year: number) => {
  const basePriceperDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = basePriceperDay + mileageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamilly", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
};
