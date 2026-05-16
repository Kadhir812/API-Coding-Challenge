import { useState } from "react"
import Header from "../componentsII/Header"
import AddBook from "./CRUD/AddBook"
import DeleteBook from "./CRUD/DeleteBook"
import UpdateBook from "./CRUD/UpdateBook"


const Book = () => {
	const [showAddBookForm, setShowAddBookForm] = useState(false)
	const [showDeleteBookForm, setShowDeleteBookForm] = useState(false)
	const [showUpdateBookForm, setShowUpdateBookForm] = useState(false)

	const openAddForm = () => {
		setShowAddBookForm(true)
		setShowDeleteBookForm(false)
		setShowUpdateBookForm(false)
	}

	const openDeleteForm = () => {
		setShowAddBookForm(false)
		setShowDeleteBookForm(true)
		setShowUpdateBookForm(false)
	}

	const openUpdateForm = () => {
		setShowAddBookForm(false)
		setShowDeleteBookForm(false)
		setShowUpdateBookForm(true)
	}

	return (
		<div className="min-h-screen bg-slate-50">
            <Header/>
			<div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
				{
                !showAddBookForm ? (
					<button
						type="button"
						onClick={openAddForm}
						className="w-full rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:w-fit"
					>
						Add Book
					</button>
				) : (
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<AddBook />
					</div>
				)}
				{
				!showDeleteBookForm ? (
					<button
						type="button"
						onClick={openDeleteForm}
						className="w-full rounded-lg bg-rose-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 sm:w-fit"
					>
						Delete Book
					</button>
				) : (
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<DeleteBook />
					</div>
				)}
				{
				!showUpdateBookForm ? (
					<button
						type="button"
						onClick={openUpdateForm}
						className="w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 sm:w-fit"
					>
						Update Book
					</button>
				) : (
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<UpdateBook />
					</div>
				)}
			</div>
			
		</div>
	)

}

export default Book