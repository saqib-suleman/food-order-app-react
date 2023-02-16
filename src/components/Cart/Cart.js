import React, { useContext } from 'react';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

import classes from './Cart.module.css';

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;
  const hasItems = cartItems.length > 0;

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };
  return (
    <>
      <div className={classes.backdrop} onClick={props.hideCart}></div>
      <div className={classes.cart}>
        <ul>
          {cartItems.map((item) => {
            return (
              <CartItem
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                key={item.id}
                onAdd={() => addItemHandler(item)}
                onRemove={() => removeItemHandler(item.id)}
              />
            );
          })}
        </ul>
        <section className={classes.amount}>
          <span>Total Amount</span>
          <span>${cartCtx.totalAmount.toFixed(2)}</span>
        </section>
        <section className={classes.actions}>
          <button onClick={props.hideCart}>Close</button>
          {hasItems && <button>Order</button>}
        </section>
      </div>
    </>
  );
}
