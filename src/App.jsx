import { useMemo, useState } from "react"
import { CATEGORIES, MENU } from "./data/menu"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import CategoryFilter from "./components/CategoryFilter"
import MenuGrid from "./components/MenuGrid"
import CartBar from "./components/CartBar"

export default function App() {
	const [query, setQuery] = useState("")
	const [category, setCategory] = useState("Semua")
	const [cart, setCart] = useState({}) // { idMenu: jumlah }

	const items = useMemo(
		() =>
			MENU.filter(
				(m) =>
					(category === "Semua" || m.category === category) && m.name.toLowerCase().includes(query.trim().toLowerCase())
			),
		[query, category]
	)

	const add = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))
	const remove = (id) =>
		setCart((c) => {
			const next = { ...c, [id]: (c[id] || 0) - 1 }
			if (next[id] <= 0) delete next[id]
			return next
		})

	const count = Object.values(cart).reduce((a, b) => a + b, 0)
	const total = MENU.reduce((sum, m) => sum + (cart[m.id] || 0) * m.price, 0)

	return (
		// Lebar dibatasi seperti layar HP; di layar besar tampil di tengah
		<div className="mx-auto min-h-screen max-w-md bg-kento-cream shadow-xl md:my-0">
			<Header cartCount={count} />
			<main className="space-y-4 px-4 pb-28 pt-4">
				<SearchBar
					value={query}
					onChange={setQuery}
				/>
				<CategoryFilter
					categories={CATEGORIES}
					active={category}
					onSelect={setCategory}
				/>
				<MenuGrid
					items={items}
					cart={cart}
					onAdd={add}
					onRemove={remove}
				/>
			</main>
			<CartBar
				count={count}
				total={total}
				onCheckout={() => alert("Halaman pesanan menyusul")}
			/>
		</div>
	)
}
