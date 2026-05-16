import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../api/axios"

const UpdateBook = () => {
    const navigate = useNavigate()

    const [isbn, setIsbn] = useState("")
    const [form, setForm] = useState({
        isbn: "",
        title: "",
        author: "",
        publicationYear: "",
    })
    const [showForm, setShowForm] = useState(false)

    const handleIsbnChange = (e) => {
        setIsbn(e.target.value)
    }

    const handleFetchBook = async () => {
        const response = await api.get(`/books/${isbn}`)
        const bookData = response.data.data
        setForm({
            isbn: bookData.isbn,
            title: bookData.title,
            author: bookData.author,
            publicationYear: bookData.publicationYear,
        })
        setShowForm(true)
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setForm((currentForm) => ({
            ...currentForm,
            [name]: value,
        }))
    }

    const handleSubmit = async () => {
        await api.put(`/books/${isbn}`, form)
        setTimeout(() => {
            navigate("/dashboard")
        }, 1000)
    }

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-slate-900">Update Book</h1>

            {!showForm ? (
                <div className="space-y-3 sm:max-w-md">
                    <label className="text-sm font-semibold text-slate-700">ISBN:</label>
                    <input
                        type="text"
                        value={isbn}
                        placeholder="Enter ISBN"
                        onChange={handleIsbnChange}
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                    />
                    <button
                        onClick={handleFetchBook}
                        className="rounded-lg bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                        Search Book
                    </button>
                </div>
            ) : (
                <>
                    <div className="space-y-1 sm:max-w-md">
                        <label className="text-sm font-semibold text-slate-700">ISBN:</label>
                        <input
                            type="text"
                            name="isbn"
                            value={form.isbn}
                            placeholder="ISBN"
                            onChange={handleChange}
                            disabled
                            className="w-full cursor-not-allowed rounded-lg border border-slate-300 bg-slate-100 px-4 py-2 text-sm text-slate-600"
                        />
                    </div>

                    <div className="space-y-1 sm:max-w-md">
                        <label className="text-sm font-semibold text-slate-700">Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            placeholder="Title"
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                        />
                    </div>

                    <div className="space-y-1 sm:max-w-md">
                        <label className="text-sm font-semibold text-slate-700">Author:</label>
                        <input
                            type="text"
                            name="author"
                            value={form.author}
                            placeholder="Author"
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                        />
                    </div>

                    <div className="space-y-1 sm:max-w-md">
                        <label className="text-sm font-semibold text-slate-700">Publication Year:</label>
                        <input
                            type="number"
                            name="publicationYear"
                            value={form.publicationYear}
                            placeholder="Publication Year"
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                    >
                        Update Book
                    </button>
                </>
            )}
        </div>
    )
}

export default UpdateBook