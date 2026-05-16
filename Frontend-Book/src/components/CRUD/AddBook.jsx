import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../api/axios"

const AddBook = () => {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        isbn: "",
        title: "",
        author: "",
        publicationYear: "",
    })

    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target

        setForm((currentForm) => ({
            ...currentForm,
            [name]: value,
        }))
    }

    const handleSubmit = async () => {
        setMessage("")

        try {
            await api.post("/books", form)
            setMessage("Book added successfully")
            setForm({
                isbn: "",
                title: "",
                author: "",
                publicationYear: "",
            })
            setTimeout(() => {
                navigate("/dashboard")
            }, 1000)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-slate-900">Add Book</h1>

            <form onSubmit={handleSubmit} className="grid gap-3 sm:max-w-md">
                <input
                    type="text"
                    name="isbn"
                    value={form.isbn}
                    placeholder="ISBN"
                    onChange={handleChange}
                    className="rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />

                <input
                    type="text"
                    name="title"
                    value={form.title}
                    placeholder="Title"
                    onChange={handleChange}
                    className="rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />

                <input
                    type="text"
                    name="author"
                    value={form.author}
                    placeholder="Author"
                    onChange={handleChange}
                    className="rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />

                <input
                    type="number"
                    name="publicationYear"
                    value={form.publicationYear}
                    placeholder="Publication Year"
                    onChange={handleChange}
                    className="rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />

                <button
                    type="submit"
                    className="rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                    Add Book
                </button>
            </form>

            {message ? <p className="text-sm font-medium text-emerald-700">{message}</p> : null}
        </div>
    )
}

export default AddBook