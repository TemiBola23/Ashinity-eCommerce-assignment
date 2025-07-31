import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-4xl font-bold">Welcome to Our eCommerce Store</h1>
        <p className="mt-4 text-lg">Discover our amazing product collection.</p>
      </main>
    </>
  );
}
