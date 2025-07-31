import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import CartSummary from '../../components/CartSummary';

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Shop All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(prod => (
            <div key={prod.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{prod.name}</h2>
              <p className="mt-2">${prod.price}</p>
              <button onClick={() => addToCart(prod)} className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">
                Add to Cart
              </button>
              <Link href={`/shop/${prod.id}`} className="text-blue-600 mt-2 block">View by ID</Link>
              <Link href={`/cloth/${prod.slug}`} className="text-green-600 block">View by Slug</Link>
            </div>
          ))}
        </div>
        <CartSummary />
      </main>
    </>
  );
              }
