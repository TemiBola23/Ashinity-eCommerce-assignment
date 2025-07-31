import { useCart } from '../context/CartContext';

export default function CartSummary() {
  const { cart, removeFromCart, clearCart } = useCart();
  if (cart.length === 0) return <div>Your cart is empty.</div>;

  return (
    <div className="bg-white p-4 border rounded mt-4">
      <h2 className="text-xl font-semibold mb-2">🛒 Cart</h2>
      <ul className="space-y-2">
        {cart.map(item => (
          <li key={item.id} className="flex justify-between items-center">
            <span>{item.name} x {item.quantity}</span>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
          </li>
        ))}
      </ul>
      <p className="mt-2 font-bold">
        Total: ${cart.reduce((t, i) => t + i.price * i.quantity, 0)}
      </p>
      <button onClick={clearCart} className="mt-2 text-sm text-red-600 underline">Clear Cart</button>
    </div>
  );
        }
