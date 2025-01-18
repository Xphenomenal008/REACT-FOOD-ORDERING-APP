import React, { useContext } from "react";
import Mealsitemform from "./mealsitemform";
import Ourcontext from "../usecontext/Usecontext";

const MealsItem = (props) => {
  let price = `$${props.price}`;
  const cartctx = useContext(Ourcontext);
  console.log(cartctx)

  const addcarthandler = (amount) => {
    cartctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
      image: props.img,
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-8 mx-auto flex flex-col items-center  w-full border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="w-full h-48 mb-4">
        <img
          src={props.img}
          alt={props.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{props.name}</h2>
        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{props.description}</p>
        <p className="text-lg font-semibold text-green-500 mb-4">{price}</p>
      </div>

      {/* Form Section */}
      <div className="w-full">
        <Mealsitemform onaddcart={addcarthandler} />
      </div>
    </div>
  );
};


export default MealsItem;
