import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals'; 
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [ isClicked, setIsClicked] = useState(false);
  const cartClickHandler = () => {
    setIsClicked(true);
  }
  const onCloseHandler =() => {
    setIsClicked(false);
  }
  return (
    <CartProvider>
    { isClicked && <Cart onClose={onCloseHandler}/>}
      <Header onCartClick={cartClickHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
} 

export default App;
