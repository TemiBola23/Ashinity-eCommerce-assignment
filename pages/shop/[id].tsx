import { useRouter } from 'next/router';
import { products } from '../../data/products';
import Navbar from '../../components/Navbar';

export default function ProductById() {
  const { query } = useRouter();
  const prod = products.find(p => p.id === query.id);
  if (!prod) return <div className="p-8">Loading product...</div>;

  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold">{prod.name}</h1>
        <p className="mt-2 text-gray-700">{prod.description}</p>
        <p className="mt-2 font-semibold">${prod.price}</p>
      </main>
    </>
  );
}
