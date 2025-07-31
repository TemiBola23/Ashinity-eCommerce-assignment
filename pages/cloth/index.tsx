import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { products } from '../../data/products';

export default function ClothCollection() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Clothing Collection</h1>
        <ul className="space-y-4">
          {products.map(item => (
            <li key={item.slug} className="border p-4 rounded shadow">
              <h2 className="text-xl">{item.name}</h2>
              <Link href={`/cloth/${item.slug}`} className="text-blue-500 mt-2 block">View Details</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
