import React, { useRef, useContext } from "react";

import CartContext from "../../store/cart-context";
import classes from "./Meal.module.css";

export default function Meal(props) {
  const quantityInputRef = useRef();

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (evt) => {
    evt.preventDefault();

    const enteredQuantity = quantityInputRef.current.value;
    const quantity = +enteredQuantity;

    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: quantity,
    });
  };

  return (
    <li className={classes.meal}>
      <span>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>${props.price}</p>
      </span>
      <form onSubmit={addToCartHandler}>
        <div>
          <label htmlFor="qunatity">Quantity</label>
          <input
            ref={quantityInputRef}
            type="number"
            id="qunatity"
            step="1"
            defaultValue="1"
            min="1"
            max="5"
          />
        </div>
        <button>+ Add</button>
      </form>
    </li>
  );
}
