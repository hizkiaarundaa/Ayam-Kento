import { Flame, Minus, Plus } from "lucide-react"
import { rupiah } from "../data/menu"

/** Satu kartu menu: gambar (sementara emoji), nama, tingkat pedas, harga, tombol tambah. */
export default function MenuCard({ item, qty, onAdd, onRemove }) {
	return (
		<article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-kento-red/10">
			{/* Ganti blok ini dengan <img src=... className="h-28 w-full object-cover" /> bila foto sudah ada */}
			{item.image ? (
				<img
					src={item.image}
					alt={item.name}
					loading="lazy"
					className="h-28 w-full object-cover"
				/>
			) : (
				<div className="flex h-28 items-center justify-center bg-linear-to-br from-kento-red to-kento-dark text-5xl">
					<span aria-hidden>{item.emoji}</span>
				</div>
			)}

			<div className="flex flex-1 flex-col gap-1 p-3">
				<h3 className="font-display text-base font-extrabold leading-tight">{item.name}</h3>
				<div
					className="flex gap-0.5"
					aria-label={`Tingkat pedas ${item.pedas} dari 3`}>
					{[1, 2, 3].map((n) => (
						<Flame
							key={n}
							size={14}
							className={n <= item.pedas ? "fill-kento-red text-kento-red" : "text-kento-ink/20"}
						/>
					))}
				</div>
				<p className="line-clamp-2 text-xs text-kento-ink/70">{item.desc}</p>

				<div className="mt-auto flex items-center justify-between pt-2">
					<span className="text-sm font-bold text-kento-red">{rupiah(item.price)}</span>
					{qty === 0 ? (
						<button
							onClick={onAdd}
							aria-label={`Tambah ${item.name}`}
							className="rounded-full bg-kento-red p-1.5 text-white active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-kento-gold">
							<Plus size={18} />
						</button>
					) : (
						<div className="flex items-center gap-2 rounded-full bg-kento-blush px-1 py-0.5">
							<button
								onClick={onRemove}
								aria-label={`Kurangi ${item.name}`}
								className="rounded-full bg-white p-1 text-kento-red">
								<Minus size={14} />
							</button>
							<span className="min-w-4 text-center text-sm font-bold">{qty}</span>
							<button
								onClick={onAdd}
								aria-label={`Tambah ${item.name}`}
								className="rounded-full bg-kento-red p-1 text-white">
								<Plus size={14} />
							</button>
						</div>
					)}
				</div>
			</div>
		</article>
	)
}
