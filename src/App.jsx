import { useState } from "react";
import { Fragment } from "react";
 import Header from "./layout/header";
import Meals from "./layout/Meals";
import Cart from "./layout/Cart";
import Consumecontext from "./usecontext/Consumecontext";
import RecipeForm from "./layout/RecipeForm";

 
 

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
        <Consumecontext makeVisibleCart={makeVisibleCart} makeHideCart={makeHideCart} >
           <div className="bg-white">
              {showCart && <Cart />}
              <Header />
          {/* <RecipeForm></RecipeForm> */}
              <Meals sharedget={sharedget} />
           </div>
        </Consumecontext>
     </Fragment>
  );
}

export default App;
