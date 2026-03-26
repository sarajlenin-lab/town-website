import { useContext } from "react";
import Link from "next/link";
import { CartContext } from "../context/CartContext";

export default function Products() {
  const { cart, addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Sample Item 1", price: 50 },
    { id: 2, name: "Sample Item 2", price: 80 }
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Products</h1>

      {products.map((item) => (
        <div key={item.id} style={{ marginBottom: 20 }}>
          <h3>{item.name}</h3>
          <p>Price: AED {item.price}</p>
          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}

      <br />

      <Link href="/cart">
        <button>Go to Cart ({cart.length})</button>
      </Link>
    </div>
  );
}
