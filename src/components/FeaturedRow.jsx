import { Minus, Plus } from "lucide-react"
import { rupiah } from "../data/menu"
import useDragScroll from "../hooks/useDragScroll"

/** Baris kartu kecil yang digeser ke samping. Dipakai untuk "Favorit pelanggan" dan "Rekomendasi". */
export default function FeaturedRow({ title, subtitle, items, cart, onAdd, onRemove }) {
	const ref = useDragScroll() // hook harus dipanggil sebelum return
	if (items.length === 0) return null
	return (
		<section>
			<div className="mb-2">
				<h2 className="font-display text-lg font-extrabold leading-tight">{title}</h2>
				{subtitle && <p className="text-xs text-kento-ink/60">{subtitle}</p>}
			</div>

			<div
				ref={ref}
				className="no-scrollbar -mx-4 flex cursor-grab select-none snap-x scroll-pl-4 gap-3 overflow-x-auto overscroll-x-contain px-4 pb-1">
				{items.map((item) => {
					const qty = cart[item.id] || 0
					return (
						<article
							key={item.id}
							className="w-36 shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-kento-red/10">
							{item.image ? (
								<img
									src={item.image}
									alt={item.name}
									loading="lazy"
									draggable={false}
									className="pointer-events-none h-24 w-full object-cover"
								/>
							) : (
								<div className="flex h-24 items-center justify-center bg-linear-to-br from-kento-red to-kento-dark text-4xl">
									<span aria-hidden>{item.emoji}</span>
								</div>
							)}
							<div className="p-2.5">
								<h3 className="truncate font-display text-sm font-extrabold">{item.name}</h3>
								<div className="mt-1 flex items-center justify-between">
									<span className="text-xs font-bold text-kento-red">{rupiah(item.price)}</span>
									{qty === 0 ? (
										<button
											onClick={() => onAdd(item.id)}
											aria-label={`Tambah ${item.name}`}
											className="rounded-full bg-kento-red p-1 text-white active:scale-95">
											<Plus size={16} />
										</button>
									) : (
										<div className="flex items-center gap-1.5 rounded-full bg-kento-blush px-0.5 py-0.5">
											<button
												onClick={() => onRemove(item.id)}
												aria-label={`Kurangi ${item.name}`}
												className="rounded-full bg-white p-0.5 text-kento-red">
												<Minus size={12} />
											</button>
											<span className="text-xs font-bold">{qty}</span>
											<button
												onClick={() => onAdd(item.id)}
												aria-label={`Tambah ${item.name}`}
												className="rounded-full bg-kento-red p-0.5 text-white">
												<Plus size={12} />
											</button>
										</div>
									)}
								</div>
							</div>
						</article>
					)
				})}
			</div>
		</section>
	)
}
