import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-semibold">About Us</h1>
        <p className="mt-4">We are a fashion-forward brand bringing quality to your doorstep.</p>
      </main>
    </>
  );
}
