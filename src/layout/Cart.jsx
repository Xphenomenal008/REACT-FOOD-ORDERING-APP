import React, { useContext } from 'react';
import Modal from './modal';
import Ourcontext from '../usecontext/Usecontext';

const Cart = () => {
  const { makehide, items, totalAmount, addItem, removeItem } = useContext(Ourcontext);

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
        <span className="font-semibold text-amber-600">${item.price.toFixed(2)}</span>
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

  return (
    <Modal>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Your Cart</h2>
        <ul className="mb-4 overflow-y-auto max-h-48">{cartItems}</ul>
        <div className="flex justify-between items-center font-bold text-lg mb-6">
          <span>Total Amount</span>
          <span className="text-amber-600">{`$${totalAmount.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={makehide}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-black transition shadow"
          >
            Close
          </button>
          {hasItems && (
            <button className="px-4 py-2 rounded bg-amber-900 hover:bg-amber-700 text-white transition shadow">
              Order
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
