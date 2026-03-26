import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Sample Item 1", price: 50 },
    { id: 2, name: "Sample Item 2", price: 80 }
  ]);

  const [address, setAddress] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <h1>Your Cart 🛒</h1>

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

      <button onClick={() => alert("Order Placed!")}>
        Checkout
      </button>
    </div>
  );
}
