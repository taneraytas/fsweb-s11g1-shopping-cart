import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { CartContext } from "./context/CartContext";
import { ProductContext } from "./context/ProductContext";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart([...cart, item]);
  };

  const removeItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart(cart.filter((e) => e.id !== item.id));
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart, removeItem }}>
          <Navigation cart={cart} />

          {/* Routelar */}
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>

            <Route path="/cart">
              <ShoppingCart cart={cart} />
            </Route>
          </main>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}
export default App;
