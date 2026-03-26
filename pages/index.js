import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to Town 🏪</h1>
      <p>Your online store</p>

      <Link href="/products">
        <button>View Products</button>
      </Link>
    </div>
  );
}
