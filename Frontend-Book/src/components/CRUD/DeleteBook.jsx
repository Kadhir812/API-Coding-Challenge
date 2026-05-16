import { useState } from "react"
import api from "../../api/axios"

const DeleteBook = () => {
	const [isbn, setIsbn] = useState("")

	const handleDeleteBook = async () => {

		if (!isbn.trim()) {
			console.log("Enter an ISBN")
			return
		}

		try {
			await api.delete(`/books/${isbn}`)
			console.log("Book deleted successfully")
			setIsbn("")
		} catch (err) {
			console.log(err)
			console.log("Unable to delete book")
		}
	}

	return (
		<div className="space-y-3 sm:max-w-md">
			<label className="text-sm font-semibold text-slate-700">ISBN:</label>
			<input
				type="text"
				value={isbn}
				placeholder="Enter ISBN"
				onChange={(e) => setIsbn(e.target.value)}
				className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
			/>

			<button
				type="button"
				onClick={handleDeleteBook}
				className="rounded-lg bg-rose-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-rose-700"
			>
				Delete
			</button>

		</div>
	)
}

export default DeleteBook
