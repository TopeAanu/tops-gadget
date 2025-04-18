import { useState } from "react";
import Header from "./components/Layout/Header";
import Gadgets from "./components/Gadgets/Gadgets";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Gadgets />
      </main>
    </CartProvider>
  );
}

export default App;
