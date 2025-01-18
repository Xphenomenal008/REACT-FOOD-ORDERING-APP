import React, { useContext, useState } from "react";
import Modal from "./modal";
import Ourcontext from "../usecontext/Usecontext";
import CheckoutForm from "./Cheakoutform";
import { use } from "react";
import Loading from "./Loading";

const Cart = () => {
  console.log(useContext(Ourcontext))
  const { makehide, items, totalAmount, addItem, removeItem, clearcart } = useContext(Ourcontext);
  console.log(items)

   
  const [showform, setshowform] = useState(false);
  const [datasubmitted, setdatasubmitted] = useState(false);
  const [loading,setLoading]=useState(false);

  const hasItems = items.length > 0;

  const cartItems = items.map((item) => (
    <li
      key={item.id}
      className="flex justify-between items-center py-3 px-4 border-b last:border-none bg-gray-50 rounded-md mb-2"
    >
      <div className="flex flex-col items-start">
        <span className="font-semibold text-gray-800">{item.name}</span>
        <span className="text-sm text-gray-500">x{item.amount}</span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="font-semibold text-amber-600">${item.price}</span>
        <button
          onClick={() => addItem({ ...item, amount: 1 })}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md shadow"
        >
          +
        </button>
        <button
          onClick={() => removeItem(item.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md shadow"
        >
          -
        </button>
      </div>
    </li>
  ));

  const handleDataSubmission = async (userData) => {
    console.log(userData)
    try {
      setdatasubmitted(false);
      setLoading(true);
      const response = await fetch(
        "https://react-app1-940db-default-rtdb.firebaseio.com/order.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: userData,
            order: items,
          }),
        }
      );
      const data = await response.json();
      setLoading(false)
      setdatasubmitted(true);
    
      
      console.log("Order submitted:", data);
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <>
    <Modal>
      {!datasubmitted ? (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Your Cart</h2>
          <ul className="mb-4 overflow-y-auto max-h-48">{cartItems}</ul>
          <div className="flex justify-between items-center font-bold text-lg mb-6">
            <span>Total Amount</span>
            <span className="text-amber-600">{`$${totalAmount.toFixed(2)}`}</span>
          </div>
          {!showform && (
            <div className="flex justify-end gap-4">
              <button
                onClick={makehide}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-black transition shadow"
              >
                Close
              </button>
              {hasItems && (
                <button
                  onClick={() => setshowform(true)}
                  className="px-4 py-2 rounded bg-amber-900 hover:bg-amber-700 text-white transition shadow"
                >
                  Order
                </button>
              )}
            </div>
          )}
          {showform && (
            <CheckoutForm
              oncloses={makehide}
              yourdata={handleDataSubmission}
            />
          )}
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <p>Your form has been submitted successfully!</p>
          <button className="p-2 bg-red-900 rounded-md text-white"  onClick={makehide}>close</button>
        </div>
      )}
    </Modal>
    {loading&&<Modal><div className="flex justify-center items-center h-48">
      <div
        className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"
        role="status"
      ></div>
    </div></Modal>}
    </>
  );
};

export default Cart;
