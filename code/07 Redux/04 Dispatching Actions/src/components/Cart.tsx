import { createPortal } from 'react-dom';

import CartItems from './CartItems.tsx';

type CartProps = {
  onClose: () => void;
};

export default function Cart({ onClose }: CartProps) {
  return createPortal(
    <>
      <div className="cart-backdrop" />
      <dialog id="cart-modal" open>
        <h2>Your Cart</h2>
        <CartItems />
        <p id="cart-actions">
          <button onClick={onClose}>Close</button>
        </p>
      </dialog>
    </>,
    document.getElementById('modal')!
  );
}
