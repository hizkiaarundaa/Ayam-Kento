import { Search, X } from "lucide-react";

/** Kolom cari menu. Terkontrol dari App (value + onChange). */
export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-kento-dark/60" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cari ayam favoritmu…"
        className="w-full rounded-full border border-kento-red/20 bg-white py-3 pl-11 pr-10 text-sm shadow-sm placeholder:text-kento-ink/40 focus:border-kento-red focus:outline-none focus:ring-2 focus:ring-kento-red/30"
      />
      {value && (
        <button aria-label="Hapus pencarian" onClick={() => onChange("")} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-kento-dark/60">
          <X size={16} />
        </button>
      )}
    </div>
  );
}
