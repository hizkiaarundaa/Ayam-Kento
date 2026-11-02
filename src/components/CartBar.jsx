import { rupiah } from "../data/menu";

/** Bar melayang di bawah; muncul hanya jika keranjang berisi. */
export default function CartBar({ count, total, onCheckout }) {
  if (count === 0) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-md px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <button
        onClick={onCheckout}
        className="flex w-full items-center justify-between rounded-2xl bg-kento-dark px-5 py-3.5 text-white shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-kento-gold"
      >
        <span className="text-sm">{count} item</span>
        <span className="font-display text-base font-extrabold">Lihat pesanan · <span className="text-kento-gold">{rupiah(total)}</span></span>
      </button>
    </div>
  );
}
