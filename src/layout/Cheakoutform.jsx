import React, { useRef, useState } from "react";

const CheckoutForm = ({ oncloses,yourdata }) => {
  const name = useRef();
  const street = useRef();
  const postalcode = useRef();
  const city = useRef();

  const [formvalidity, setformvalidity] = useState({
    nameinput: true,
    streetinput: true,
    postalcodeinput: true,
    cityinput: true,
  });

  // Validation for name
const validname = (value) => {
    return value.trim().length > 3 && value.trim().length <= 15; // valid if it's not an empty string and less than or equal to 15 characters
  };
  
  // Validation for postal code (at least 5 characters)
  const validcode = (value) => {
    return value.trim().length <= 6; // valid if postal code is at least 5 characters
  };

  const handlechksubmit = (e) => {
    e.preventDefault();

    const entredname = name.current.value;
    const entredstreet = street.current.value;
    const entredpostalcode = postalcode.current.value;
    const entredcity = city.current.value;

    // Check validity of each input field
    const entrednameisValid = validname(entredname);
    const entredstreetisValid = validname(entredstreet);
    const entredpostalisValid = validcode(entredpostalcode);
    const entredcityisValid = validname(entredcity);

    // Update form validity state
    setformvalidity({
      nameinput: entrednameisValid,
      streetinput: entredstreetisValid,
      postalcodeinput: entredpostalisValid,
      cityinput: entredcityisValid,
    });

    // Check if the entire form is valid
    const formisvalid =
      entrednameisValid &&
      entredstreetisValid &&
      entredpostalisValid &&
      entredcityisValid;

    if (!formisvalid) {
      return;
    }
    yourdata({
        name: entredname,
        street: entredstreet,
        postalcode: entredpostalcode,
        city: entredcity
    })
console.log(entredname,entredcity,entredpostalcode)
 name.current.value="";
     street.current.value="";
 postalcode.current.value="";
city.current.value="";
    // Submit form (or do further processing)
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Checkout</h2>
      <form onSubmit={handlechksubmit} className="space-y-3">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1 text-sm">
            Name
          </label>
          <input
            ref={name}
            type="text"
            id="name"
            className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-400 text-sm outline-none"
            placeholder="Enter your name"
            required
          />
          {!formvalidity.nameinput && (
            <p className="text-red-600">Please enter a valid name!</p>
          )}
        </div>

        {/* Street */}
        <div>
          <label htmlFor="street" className="block text-gray-700 font-medium mb-1 text-sm">
            Street
          </label>
          <input
            ref={street}
            type="text"
            id="street"
            className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-400 text-sm outline-none"
            placeholder="Enter your street"
            required
          />
          {!formvalidity.streetinput && (
            <p className="text-red-600">Please enter a valid street!</p>
          )}
        </div>

        {/* Postal Code */}
        <div>
          <label htmlFor="postal" className="block text-gray-700 font-medium mb-1 text-sm">
            Postal Code
          </label>
          <input
            ref={postalcode}
            type="text"
            id="postal"
            className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-400 text-sm outline-none"
            placeholder="Enter your postal code"
            required
          />
          {!formvalidity.postalcodeinput && (
            <p className="text-red-600">Please enter a valid postal code!</p>
          )}
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-gray-700 font-medium mb-1 text-sm">
            City
          </label>
          <input
            ref={city}
            type="text"
            id="city"
            className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-400 text-sm outline-none"
            placeholder="Enter your city"
            required
          />
          {!formvalidity.cityinput && (
            <p className="text-red-600">Please enter a valid city!</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={oncloses}
            type="button"
            className="px-3 py-1.5 bg-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-400 transition"
          >
            Close
          </button>
          <button
            type="submit"
            className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
