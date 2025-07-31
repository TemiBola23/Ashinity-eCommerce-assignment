import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import { products } from '../../data/products';

export default function ClothDetailBySlug() {
  const { query } = useRouter();
  const prod = products.find(item => item.slug === query.slug);
  if (!prod) return <div className="p-8">Loading cloth...</div>;

  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold">{prod.name}</h1>
        <p className="mt-2">{prod.description}</p>
        <p className="mt-2 font-semibold">${prod.price}</p>
      </main>
    </>
  );
}
