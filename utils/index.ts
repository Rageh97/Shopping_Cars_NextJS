const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b7d2ae626amshc2966c521430c77p110255jsn4e2578d3e4a1",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
export async function fetchCar() {
  const headers = {
    "X-RapidAPI-Key": "b7d2ae626amshc2966c521430c77p110255jsn4e2578d3e4a1",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const res = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
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
