import React, { useContext } from "react";
import Mealsitemform from "./mealsitemform";
import Ourcontext from "../usecontext/Usecontext";
const MealsItem = (props) => {
  let price = `$${props.price.toFixed(2)}`;
  const cartctx=useContext(Ourcontext)
  const addcarthandler=(amount)=>{
    // if(amount++){
      
    // price+= price
    // }
    cartctx.addItem({
      id:props.id,
      name:props.name,
      price:props.price,
      amount:amount
  })

  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6  mx-auto flex justify-between items-center gap-16">
      <div>
        <h2 className="text-lg font-bold text-gray-800">{props.name}</h2>
        <p className="text-sm text-gray-600 my-2">{props.description}</p>
        <p className="text-lg font-semibold text-amber-600">{price}</p>
      </div>
      <Mealsitemform onaddcart={addcarthandler}></Mealsitemform>
    </div>
  );
};

export default MealsItem;
