import React from "react";


const Ourcontext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  clearcart: () => {},
});

export default Ourcontext;
