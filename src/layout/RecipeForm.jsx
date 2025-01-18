import React, { useRef, useState } from 'react';

const RecipeForm = ({handleMealAdded}) => {
   const id=useRef()
   const ourname=useRef()
   const description=useRef()
   const img=useRef() 
   const price=useRef()
   const[myrecipe,setmyrecipe]=useState('')

   const submitHandler = async (e) => {
    e.preventDefault();
    console.log(img.current.value)
    // Create the recipe object
    const recipe = {
        id: id.current.value,
        name: ourname.current.value,
        description: description.current.value,
        price: price.current.value,
        img:img.current.value
    };

    // Clear input fields
    id.current.value = '';
    ourname.current.value = '';
    description.current.value = '';
    price.current.value = '';

    // Save directly to the database using `onaddRecipe`
    await onaddRecipe(recipe);
     
};

const onaddRecipe = async (recipe) => {
    try {
        const response = await fetch(
            'https://react-app1-940db-default-rtdb.firebaseio.com/myrecipe.json',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipe), // Use the recipe directly
            }
        );

        const data = await response.json();
        console.log('Saved recipe:', data);
    } catch (e) {
        console.error('Error saving recipe:', e);
    }
};





  return (
    <div className="bg-red-800  text-white max-w-screen-md mx-auto p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Order Form</h1>
      <form onSubmit={submitHandler}>
        {/* ID Field */}
        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium mb-1">
            ID
          </label>
          <input
            type="text"
            id="id"
            className="w-full p-2 border border-red-800 rounded bg-red-50 text-red-800 focus:outline-none focus:ring-2 focus:ring-red-700"
            placeholder="Enter ID"
            ref={id}
          />
        </div>

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-red-800 rounded bg-red-50 text-red-800 focus:outline-none focus:ring-2 focus:ring-red-700"
            placeholder="Enter Name"
            ref={ourname}
          />
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            className="w-full p-2 border border-red-300 rounded bg-red-50 text-red-800 focus:outline-none focus:ring-2 focus:ring-red-700"
            placeholder="Enter Description"
            rows="3"
            ref={description}
          ></textarea>
        </div>

        {/* Price Field */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium mb-1">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="w-full p-2 border border-red-300 rounded bg-red-50 text-red-800 focus:outline-none focus:ring-2 focus:ring-red-700"
            placeholder="Enter Price"
            ref={price}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium mb-1">
            img url
          </label>
          <input
            type="text"
            id="price"
            className="w-full p-2 border border-red-300 rounded bg-red-50 text-red-800 focus:outline-none focus:ring-2 focus:ring-red-700"
            placeholder="Enter Price"
            ref={img}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-red-700 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
