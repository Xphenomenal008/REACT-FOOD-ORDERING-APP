import React from 'react'
import Card from './Card';
import MealsItem from './MealsItem';
const AvailbleMeals = () => {
  const meals = [
    {
      id: "m1",
      name: "Grilled Chicken Salad",
      description: "Healthy grilled chicken with fresh veggies and tangy dressing",
      price: 12.99,
    },
    {
      id: "m2",
      name: "Spaghetti Bolognese",
      description: "Classic Italian pasta with rich, savory meat sauce",
      price: 15.49,
    },
    {
      id: "m3",
      name: "Margherita Pizza",
      description: "Stone-baked pizza with fresh tomatoes, mozzarella, and basil",
      price: 9.99,
    },
    {
      id: "m4",
      name: "Cheeseburger Combo",
      description: "Juicy cheeseburger with fries and a cold drink",
      price: 11.49,
    },
    {
      id: "m5",
      name: "Vegan Buddha Bowl",
      description: "A wholesome mix of quinoa, roasted veggies, and avocado",
      price: 13.29,
    },
    {
      id: "m6",
      name: "Butter Chicken",
      description: "Tender chicken in creamy, spiced tomato curry, served with naan",
      price: 16.99,
    },
    {
      id: "m7",
      name: "Sushi Platter",
      description: "Assorted sushi rolls with fresh fish, wasabi, and soy sauce",
      price: 18.49,
    },
    {
      id: "m8",
      name: "Pancake Stack",
      description: "Fluffy pancakes with maple syrup, butter, and fresh fruits",
      price: 8.99,
    },
  ];
  const dummymeal=meals.map((ourmeal)=><MealsItem key={ourmeal.id} id={ourmeal.id} name={ourmeal.name} description={ourmeal.description} price={ourmeal.price} ></MealsItem>)
  return (
   
    <Card>
    <ul>{dummymeal}</ul> 
    </Card>
  )
}

export default AvailbleMeals
