import { useEffect, useState, Fragment, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/header";
import Meals from "./layout/Meals";
import Cart from "./layout/Cart";
import Consumecontext from "./usecontext/Consumecontext";
import RecipeForm from "./layout/RecipeForm";
import Login from "./Logout";


function App() {
   
  const [saveit, setsaveit] = useState(null);
  const [showCart, setshowCart] = useState(false);

  const makeVisibleCart = () => {
    setshowCart(true);
  };

  const makeHideCart = () => {
    setshowCart(false);
  };

  const sharedget = (getting) => {
    setsaveit(getting);
  };

  return (
    <Fragment>
      <Consumecontext makeVisibleCart={makeVisibleCart} makeHideCart={makeHideCart}>
      <Header />
       {/* add login and logout button */}
        <Routes>
             
          <Route
            path="/"
            element={
              <div className="bg-white">
                {showCart && <Cart />}
                <Meals sharedget={sharedget} />
              </div>
            }
          />
          <Route path="/recipe-form" element={<RecipeForm />} />
          {/* add login signup and logout route */}
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Consumecontext>
    </Fragment>
  );
}

export default App;
