import { useContext, useState } from "react";
import { CartContext } from '../../../context/CartContext';

export default function Cart() {
  const { cart } = useContext(CartContext);
  const [address, setAddress] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <h1>Your Cart 🛒</h1>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - AED {item.price}
        </div>
      ))}

      <h2>Total: AED {total}</h2>

      <h3>Shipping Address</h3>
      <textarea
        placeholder="Enter your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ width: "300px", height: "100px" }}
      />

      <br /><br />

      <button onClick={() => alert("Order Placed Successfully!")}>
        Checkout
      </button>
    </div>
  );
}
