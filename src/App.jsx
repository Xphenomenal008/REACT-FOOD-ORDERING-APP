import { useState } from "react";
import { Fragment } from "react";
 import Header from "./layout/header";
import Meals from "./layout/Meals";
import Cart from "./layout/Cart";
import Consumecontext from "./usecontext/Consumecontext";
 

function App() {
   
   const[showCart,setshowCart]=useState(false)
    
 
  let makeVisibleCart=()=>{
    setshowCart(true)
   }
 let makeHideCart=()=>{
    setshowCart(false)
   }

   
    
  return (
   <Fragment >
    <Consumecontext makeVisibleCart={makeVisibleCart} makeHideCart={makeHideCart}   >
    <div className="bg-white ">
    { showCart && <Cart></Cart>}
    <Header></Header>
    <Meals></Meals>

    </div>
    </Consumecontext>
   </Fragment>
  );
}

export default App;
