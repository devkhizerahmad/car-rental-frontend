import "./AddtoCart.css";
import { useState } from "react";
const products = [
  { id: 1, name: "Laptop", price: "25000" },
  { id: 2, name: "Computer", price: "10000" },
  { id: 3, name: "Television", price: "15000" },
];

function ShoppingCart() {
  const [cart, SetCart] = useState([]);

  const addtoCart = (product) => {
    console.log("click product :", product);

    SetCart((prevCart) => {
      const existProduct = prevCart.find((item) => item.id === product.id);
      console.log("ext product :", existProduct);

      console.log(prevCart);

      if (existProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  const removeItem = (productId) => {
    SetCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <div className="app">
      <h2>Shopping Cart</h2>
      <div className="product-list">
        {products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: {product.price}Rs</p>
              <button className="add-to-cart-btn" onClick={() => addtoCart(product)}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
      <div className="cart">
        <h2>Cart Items</h2>
        {
          cart.length === 0 ? (
            <p>No items in the cart</p>
          ) : (
            <ul>
              {cart.map((item) =>{  
                return(
                <li className="cart-item">
                  {item.name} - Price: {item.price}Rs X Quantity: {item.quantity}
                  <button onClick={()=>removeItem(item.id)} >Remove</button>
                </li>
              )} )}
              <h3>Total : {getTotalPrice()} </h3>
            </ul>
          )
        }
      </div>
    </div>
  );
}
export default ShoppingCart;
