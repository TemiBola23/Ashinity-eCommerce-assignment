import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="mt-4">Email us at: <a href="mailto:support@fashionstore.com" className="text-blue-500 underline">support@fashionstore.com</a></p>
      </main>
    </>
  );
}
