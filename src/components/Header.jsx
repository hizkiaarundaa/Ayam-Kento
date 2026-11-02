import { ShoppingBag } from "lucide-react"

/** Header lengket di atas: logo, nama warung, slogan, ikon keranjang. */
export default function Header({ cartCount }) {
	return (
		<header className="sticky top-0 z-30 bg-kento-red text-white shadow-md">
			<div className="flex items-center gap-3 px-4 py-3">
				<img
					src="/logo.png"
					alt="Logo Ayam Kento"
					className="h-12 w-12 shrink-0 rounded-full object-contain p-0.5"
				/>
				<div className=" flex-1">
					<h1 className="text-xl font-extrabold leading-tight">Ayam Kento</h1>
					<p className="truncate text-xs text-kento-blush">1 Kali Makang Nda Ta bajalang</p>
				</div>
				<button
					aria-label={`Keranjang, ${cartCount} item`}
					className="relative rounded-full bg-kento-dark p-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-kento-gold">
					<ShoppingBag size={20} />
					{cartCount > 0 && (
						<span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-kento-gold px-1 text-[11px] font-bold text-kento-ink">
							{cartCount}
						</span>
					)}
				</button>
			</div>
		</header>
	)
}
