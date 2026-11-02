import useDragScroll from "../hooks/useDragScroll"

/** Banner promo yang bisa digeser (tanpa JS, memakai scroll-snap). Isi slide bisa diganti lewat prop `slides`. */
const DEFAULT_SLIDES = [
	{
		id: 1,
		title: "Rajanya Ayam Geprek & Soto",
		text: "Pedas, renyah, dan bikin ketagihan.",
		cta: "Pesan sekarang",
		emoji: "🍗",
		style: "bg-linear-to-br from-kento-red to-kento-dark text-white"
	},
	{
		id: 2,
		title: "Ayam Taliwang",
		text: "Bakar pedas khas Lombok, wajib dicoba.",
		cta: "Lihat menu",
		emoji: "🌶️",
		style: "bg-linear-to-br from-kento-dark to-kento-ink text-white"
	},
	{
		id: 3,
		title: "1 Kali Makang Nda Ta bajalang",
		text: "Sekali makan, langsung puas.",
		cta: "Pesan sekarang",
		emoji: "🔥",
		style: "bg-kento-gold text-kento-ink"
	}
]

export default function Hero({ slides = DEFAULT_SLIDES, onOrder }) {
	const ref = useDragScroll()
	return (
		<section
			ref={ref}
			aria-label="Promo"
			className="no-scrollbar -mx-4 flex cursor-grab select-none snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-4">
			{slides.map((s) => (
				<article
					key={s.id}
					className={`relative flex min-h-40 w-[85%] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-3xl p-5 ${s.style}`}>
					<span
						aria-hidden
						className="absolute -bottom-4 -right-2 text-8xl opacity-90">
						{s.emoji}
					</span>
					<div className="relative max-w-[70%]">
						<h2 className="font-display text-2xl font-extrabold leading-tight">{s.title}</h2>
						<p className="mt-1 text-sm opacity-90">{s.text}</p>
					</div>
					<button
						onClick={onOrder}
						className="relative mt-4 w-fit rounded-full bg-white px-4 py-2 text-sm font-bold text-kento-red focus:outline-hidden focus-visible:ring-2 focus-visible:ring-kento-gold">
						{s.cta}
					</button>
				</article>
			))}
		</section>
	)
}
