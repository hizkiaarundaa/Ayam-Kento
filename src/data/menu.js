// Data sementara. Harga & deskripsi adalah contoh — ganti dengan data asli.
export const CATEGORIES = ["Semua", "Geprek & Penyet", "Bakar", "Khas Nusantara"]

export const MENU = [
	{
		id: 1,
		name: "Ayam Geprek",
		category: "Geprek & Penyet",
		price: 20000,
		pedas: 3,
		desc: "Ayam crispy digeprek dengan sambal bawang.",
		emoji: "🍗"
	},
	{
		id: 2,
		name: "Ayam Penyet",
		category: "Geprek & Penyet",
		price: 25000,
		pedas: 2,
		desc: "Ayam goreng dipenyet bersama sambal terasi.",
		emoji: "🍗"
	},
	{
		id: 3,
		name: "Ayam Lalapan",
		category: "Geprek & Penyet",
		price: 25000,
		pedas: 1,
		desc: "Ayam goreng dengan lalapan segar dan sambal.",
		emoji: "🥬"
	},
	{
		id: 4,
		name: "Ayam Bakar",
		category: "Bakar",
		price: 25000,
		pedas: 1,
		desc: "Ayam bakar bumbu manis gurih.",
		emoji: "🔥"
	},
	{
		id: 5,
		name: "Ayam Betutu",
		category: "Bakar",
		price: 25000,
		pedas: 30000,
		desc: "Ayam berbumbu rempah ala Bali, empuk meresap.",
		emoji: "🍖"
	},
	{
		id: 6,
		name: "Ayam Taliwang",
		category: "Bakar",
		price: 25000,
		pedas: 3,
		desc: "Ayam bakar pedas khas Lombok.",
		emoji: "🌶️"
	},
	{
		id: 7,
		name: "Ayam Rica-rica",
		category: "Khas Nusantara",
		price: 22000,
		pedas: 3,
		desc: "Ayam tumis cabai rica-rica yang pedas segar.",
		emoji: "🌶️"
	},
	{
		id: 8,
		name: "Ayam Sarundeng",
		category: "Khas Nusantara",
		price: 22000,
		pedas: 2,
		desc: "Ayam dengan taburan sarundeng gurih.",
		emoji: "🍗"
	}
]

export const rupiah = (n) => "Rp " + new Intl.NumberFormat("id-ID").format(n)
