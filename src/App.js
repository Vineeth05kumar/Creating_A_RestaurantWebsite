import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals'; 
import Cart from './components/Cart/Cart';

function App() {
  const [ isClicked, setIsClicked] = useState(false);
  const cartClickHandler = () => {
    setIsClicked(true);
  }
  const onCloseHandler =() => {
    setIsClicked(false);
  }
  return (
    <>
    { isClicked && <Cart onClose={onCloseHandler}/>}
      <Header onCartClick={cartClickHandler}/>
      <main>
        <Meals />
      </main>
    </>
  );
} 

export default App;
