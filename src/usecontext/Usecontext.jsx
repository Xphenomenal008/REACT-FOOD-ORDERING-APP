import { createContext } from "react";

const Ourcontext=createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})
export default Ourcontext;