import React, { Fragment } from 'react';
import resImage from '../assets/res.jpg';
import { ImCart } from "react-icons/im";
import { useContext } from 'react';
import Ourcontext from '../usecontext/Usecontext';

const Header = (props) => {
  const { makevisible, makehide } = useContext(Ourcontext);
  const cartCtx = useContext(Ourcontext);

  const cartlen = cartCtx.items.reduce((num, item) => {
    return num + item.amount; // Correctly calculate total quantity
  }, 0);

  return (
    <Fragment>
      <div>
        <div className="bg-amber-950 h-20  flex justify-around  items-center text-white font-bold sticky top-0 z-20">
          <div className="name text-2xl">ReactMeals</div>
          <div className="btn flex items-center px-2 justify-around bg-amber-900 rounded-full w-36 h-16">
            <ImCart onClick={makevisible} size={24} />
            <button onClick={makevisible} className="cart text-white text-xl p-1 ml-2">Cart</button>

            <div className="cartnumber rounded-full h-8 w-8 bg-red-700 text-center py-1">{cartlen}</div>
          </div>
        </div>
        <img
          className="w-[100%] h-96 rounded-b-full"
          src={resImage}
          alt="restaurant image"
        />
      </div>
    </Fragment>
  );
};

export default Header;
