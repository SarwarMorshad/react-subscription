import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-[#52b788] rounded-md p-4 flex flex-col text-white">
      <h4 className="font-semibold bg-white bg-opacity-20 rounded-t px-4 py-2 text-center">{name}</h4>
      <h2 className="text-center py-8 bg-white bg-opacity-5 pl-12 pr-10 my-4">
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>

      <div className="pl-6 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="rounded-lg hover:bg-teal-400 bg-[#fec89a] w-full py-3 text-gray-700 my-3">
        Choose Plan
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
