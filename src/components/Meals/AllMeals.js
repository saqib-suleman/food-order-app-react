import React from 'react';
import Meal from './Meal';
import MealsSummary from './MealsSummary';

import classes from './AllMeals.module.css';

const DUMMY_MEALS = [
  {
    id: Math.random(),
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: Math.random(),
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: Math.random(),
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: Math.random(),
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

export default function AllMeals() {
  return (
    <>
      {<MealsSummary />}
      <section className={classes.meals}>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return (
              <Meal
                key={meal.id}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
}
