import React, { useState } from 'react'
import Mealssummery from './Mealssummery'
import AvailbleMeals from './AvailbleMeals'

const Meals = () => {
   

  return (
      <div className='flex space-y-3 items-center justify-center'>
          <Mealssummery />
          <AvailbleMeals />
      </div>
  );
};

export default Meals;