import MenuCard from "./MenuCard"

/** Grid 2 kolom berisi MenuCard + tampilan kosong saat tidak ada hasil. */
export default function MenuGrid({ items, cart, onAdd, onRemove }) {
	if (items.length === 0) {
		return (
			<div className="py-16 text-center text-sm text-kento-ink/60">
				Menu tidak ditemukan. Coba kata kunci lain atau pilih kategori “Semua”.
			</div>
		)
	}
	return (
		<div className="grid grid-cols-2 gap-3">
			{items.map((item) => (
				<MenuCard
					key={item.id}
					item={item}
					qty={cart[item.id] || 0}
					onAdd={() => onAdd(item.id)}
					onRemove={() => onRemove(item.id)}
				/>
			))}
		</div>
	)
}
