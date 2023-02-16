import { useState } from 'react';

import './App.css';
import Cart from './components/Cart/Cart';
import AllMeals from './components/Meals/AllMeals';
import Header from './components/UI/Header';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  

  return (
    <CartProvider>
      <div className="app">
        <Header showCart={showCartHandler} />
        <AllMeals props/>
        {cartIsVisible && <Cart hideCart={hideCartHandler} />}
      </div>
    </CartProvider>
  );
}

export default App;
