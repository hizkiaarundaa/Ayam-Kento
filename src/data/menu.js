// Data sementara. Harga & deskripsi adalah contoh — ganti dengan data asli.
// favorit: true     -> tampil di baris "Favorit pelanggan"
// rekomendasi: true -> tampil di baris "Rekomendasi untukmu"
export const CATEGORIES = ["Semua", "Geprek & Penyet", "Bakar", "Khas Nusantara"]

export const MENU = [
	{
		id: 1,
		name: "Ayam Geprek",
		category: "Geprek & Penyet",
		price: 20000,
		pedas: 3,
		desc: "Ayam crispy digeprek dengan sambal bawang.",
		emoji: "🍗",
		image: "/menu/geprek.jpg",
		favorit: true
	},
	{
		id: 2,
		name: "Ayam Penyet",
		category: "Geprek & Penyet",
		price: 25000,
		pedas: 2,
		desc: "Ayam goreng dipenyet bersama sambal terasi.",
		emoji: "🍗",
		image: "/menu/penyet.jpg",
		favorit: true
	},
	{
		id: 3,
		name: "Ayam Lalapan",
		category: "Geprek & Penyet",
		price: 25000,
		pedas: 1,
		desc: "Ayam goreng dengan lalapan segar dan sambal.",
		emoji: "🥬",
		image: "/menu/lalapan.jpg",
		rekomendasi: true
	},
	{
		id: 4,
		name: "Ayam Bakar",
		category: "Bakar",
		price: 25000,
		pedas: 1,
		desc: "Ayam bakar bumbu manis gurih.",
		emoji: "🔥",
		image: "/menu/bakar.jpg",
		favorit: true
	},
	{
		id: 5,
		name: "Ayam Betutu",
		category: "Bakar",
		price: 25000,
		pedas: 2, // sebelumnya 30000 (salah isi): pedas harus 1 sampai 3
		desc: "Ayam berbumbu rempah ala Bali, empuk meresap.",
		emoji: "🍖",
		image: "/menu/betutu.jpg",
		rekomendasi: true
	},
	{
		id: 6,
		name: "Ayam Taliwang",
		category: "Bakar",
		price: 30000,
		pedas: 3,
		desc: "Ayam bakar pedas khas Lombok.",
		emoji: "🌶️",
		image: "/menu/taliwang.jpg",
		rekomendasi: true
	},
	{
		id: 7,
		name: "Ayam Rica-rica",
		category: "Khas Nusantara",
		price: 25000,
		pedas: 3,
		desc: "Ayam tumis cabai rica-rica yang pedas segar.",
		emoji: "🌶️",
		image: "/menu/rica-rica.jpg",
		favorit: true
	},
	{
		id: 8,
		name: "Ayam Sarundeng",
		category: "Khas Nusantara",
		price: 20000,
		pedas: 2,
		desc: "Ayam dengan taburan sarundeng gurih.",
		emoji: "🍗",
		image: "/menu/sarundeng.jpg",
		rekomendasi: true
	}
]

export const rupiah = (n) => "Rp " + new Intl.NumberFormat("id-ID").format(n)
