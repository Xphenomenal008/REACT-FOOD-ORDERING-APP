import React, { useState } from 'react';
import Ourcontext from './Usecontext';

const Consumecontext = (prop) => {
  const [defaultCartState, setdefaultcartstate] = useState({
    items: [],
    totalAmount: 0,
  });

  const addItemCartHandler = (item) => {
    setdefaultcartstate((prevState) => {
      const existingItemIndex = prevState.items.findIndex((i) => i.id === item.id);
      const existingItem = prevState.items[existingItemIndex];
  
      let updatedItems;
  
      if (existingItem) {
        const updatedItem = { ...existingItem, amount: existingItem.amount + item.amount };
        updatedItems = [...prevState.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = prevState.items.concat(item);
      }
  
      const updatedTotalAmount = prevState.totalAmount + item.price * item.amount;
  
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    });
  };
  

  const removeItemCartHandler = (id) => {
    setdefaultcartstate((prevState) => {
      const existingItemIndex = prevState.items.findIndex((i) => i.id === id);
      const existingItem = prevState.items[existingItemIndex];
  
      if (!existingItem) return prevState;
  
      const updatedTotalAmount = prevState.totalAmount - existingItem.price;
      let updatedItems;
  
      if (existingItem.amount === 1) {
        updatedItems = prevState.items.filter((item) => item.id !== id);
      } else {
        const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedItems = [...prevState.items];
        updatedItems[existingItemIndex] = updatedItem;
      }
  
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    });
  };

  const cartContext = {
    items: defaultCartState.items,
    totalAmount: defaultCartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  };

  

  return (
    <Ourcontext.Provider
      value={{
        ...cartContext,
        makehide: prop.makeHideCart,
        makevisible: prop.makeVisibleCart,
      }}
    >
      {prop.children}
    </Ourcontext.Provider>
  );
};

export default Consumecontext;
