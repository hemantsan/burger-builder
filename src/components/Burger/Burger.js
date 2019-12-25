import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <div>Please start add your ingredients.</div>;
  }
  return (
    <div className='container'>
      <div className={classes.Burger}>
        <BurgerIngredient type='bread-top'></BurgerIngredient>
        {transformedIngredients}
        <BurgerIngredient type='bread-bottom'></BurgerIngredient>
      </div>
    </div>
  );
};

export default Burger;
