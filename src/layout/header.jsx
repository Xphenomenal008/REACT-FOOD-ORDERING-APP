import React, { Fragment, useContext } from 'react';
import resImage from '../assets/res.jpg';
import { ImCart } from "react-icons/im";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import Ourcontext from '../usecontext/Usecontext';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GrRestaurant } from "react-icons/gr";
import { loginactions } from '../store/redux';
import { useDispatch } from 'react-redux';

const Header = () => {
  const login = useSelector((state) => state.login.login); 
  console.log(login)// Access Redux state
  const dispatch = useDispatch(); // Dispatch Redux actions

  const { makevisible } = useContext(Ourcontext); // Context for cart visibility
  const cartCtx = useContext(Ourcontext);
  const navigate = useNavigate();

  const cartlen = cartCtx.items.reduce((num, item) => {
    return num + item.amount; // Calculate total quantity
  }, 0);

   
  const loginhandler = () => {
    navigate("/login");
  

  }
  const logouthandler = () => {
    dispatch(loginactions.setlogin());
  }

   

  return (
    <Fragment>
      <div>
        <div className="bg-amber-950 h-20 flex justify-around items-center text-white font-bold sticky top-0 z-20">
          <div className="name text-2xl flex  ">
            <GrRestaurant className="" />
            <span className='font-serif'>HungryPoint</span>
          </div>
          {
            !login && (
              <div className="btn flex items-center px-2 justify-around bg-amber-900 rounded-full w-36 h-16">
                <ImCart onClick={makevisible} size={24} />
                <button onClick={makevisible} className="cart text-white text-xl p-1 ml-2">Cart</button>
                <div className="cartnumber rounded-full h-8 w-8 bg-red-700 text-center py-1">{cartlen}</div>
              </div>
            )
          }
          <div>
          
              {login ? (
                <div className='flex items-center text-xl'><FaSignOutAlt className="mr-2 font-serif" /><button onClick={loginhandler}>Login</button></div>
              ) : (
                <div className='flex items-center text-xl'><FaSignInAlt  className="mr-2 font-serif" /><button onClick={logouthandler}>Logout</button></div>
              )}

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
