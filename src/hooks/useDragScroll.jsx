import { useEffect, useRef } from "react"

/**
 * Membuat baris horizontal bisa ditarik dengan mouse (desktop / emulator).
 * Sentuhan di HP tetap ditangani browser, jadi hook ini hanya aktif untuk mouse.
 * Pakai: const ref = useDragScroll() lalu <div ref={ref} className="overflow-x-auto ...">
 */
export default function useDragScroll() {
	const ref = useRef(null)

	useEffect(() => {
		const el = ref.current
		if (!el) return

		let down = false
		let moved = false
		let startX = 0
		let startLeft = 0

		const onDown = (e) => {
			if (e.pointerType !== "mouse" || e.button !== 0) return
			down = true
			moved = false
			startX = e.clientX
			startLeft = el.scrollLeft
		}
		const onMove = (e) => {
			if (!down) return
			const dx = e.clientX - startX
			if (Math.abs(dx) > 5) {
				moved = true
				el.style.scrollSnapType = "none" // matikan snap selama ditarik
			}
			if (moved) el.scrollLeft = startLeft - dx
		}
		const onUp = () => {
			if (!down) return
			down = false
			el.style.scrollSnapType = "" // snap aktif lagi, geser ke kartu terdekat
		}
		// setelah ditarik, jangan anggap sebagai klik (tombol + tidak ikut tertekan)
		const onClick = (e) => {
			if (moved) {
				e.preventDefault()
				e.stopPropagation()
				moved = false
			}
		}

		el.addEventListener("pointerdown", onDown)
		el.addEventListener("click", onClick, true)
		window.addEventListener("pointermove", onMove)
		window.addEventListener("pointerup", onUp)
		return () => {
			el.removeEventListener("pointerdown", onDown)
			el.removeEventListener("click", onClick, true)
			window.removeEventListener("pointermove", onMove)
			window.removeEventListener("pointerup", onUp)
		}
	}, [])

	return ref
}
