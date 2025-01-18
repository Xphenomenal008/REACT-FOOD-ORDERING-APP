import React, { useEffect, useState } from 'react';
import Card from './Card';
import MealsItem from './MealsItem';
import RecipeForm from './RecipeForm';
import Loading from './Loading';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]); // Manage meals in parent state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMeals = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        'https://react-app1-940db-default-rtdb.firebaseio.com/myrecipe.json'
      );
      if (!res.ok) throw new Error('Failed to fetch meals!');
      const data = await res.json();
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
          image: data[key].img,
        });
      }
      setMeals(loadedMeals);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch meals on initial render
  useEffect(() => {
    fetchMeals();
  }, []);

  const handleMealAdded = () => {
    fetchMeals(); // Refetch meals whenever a new meal is added
  };

  // Meal List
  const mealList = meals.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      img={meal.image}
    />
  ));

  return (
    <div className="flex flex-col items-center gap-8 p-6 bg-gray-50 min-h-screen w-screen">
      <Card>
        {loading && <Loading />}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && meals.length === 0 && (
          <p className="text-center text-gray-700">No meals available. Add some recipes!</p>
        )}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {mealList}
        </ul>
      </Card>
    </div>
  );
};


export default AvailableMeals;
