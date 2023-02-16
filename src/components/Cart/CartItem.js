import React from 'react';

import classes from './CartItem.module.css';

export default function CartItem(props) {
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2 className={classes.name}>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.price}</span>
          <span className={classes.quantity}>x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
}
