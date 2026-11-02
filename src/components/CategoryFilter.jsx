/** Chip kategori yang bisa digeser ke samping. */
export default function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 py-1">
      {categories.map((c) => {
        const on = c === active;
        return (
          <button
            key={c}
            onClick={() => onSelect(c)}
            aria-pressed={on}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kento-gold ${
              on ? "bg-kento-dark text-white" : "bg-kento-blush text-kento-dark"
            }`}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}
