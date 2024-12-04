import React from 'react'
import Mealssummery from './Mealssummery'
import AvailbleMeals from './AvailbleMeals'

const Meals = () => {
  return (
    <div className='flex space-y-3 items-center justify-center'>
      <Mealssummery></Mealssummery>
      <AvailbleMeals></AvailbleMeals>
    </div>
  )
}

export default Meals
