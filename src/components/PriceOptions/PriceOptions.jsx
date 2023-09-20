import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const [priceOptions, setPriceOptions] = useState([]);
  useEffect(() => {
    fetch("priceOptions.json")
      .then((res) => res.json())
      .then((data) => setPriceOptions(data));
  }, []);
  console.log(priceOptions);

  return (
    <div className="m-12">
      <div className="text-center font-semibold">
        <h1 className="text-5xl">
          <span className="text-[#52b788] tracking-wide">Flexible </span>
          <span>Plans</span>
        </h1>
        <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full mb-4">
          Choose a plan that works best for you and
          <br /> your team.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
