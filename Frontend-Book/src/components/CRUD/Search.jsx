import { useEffect, useState } from "react"
import api from "../../api/axios"
import Card from "../../componentsII/Card"

const Search = () => {
    const [books, setBooks] = useState([])
    const [isbn, setIsbn] = useState("")

    const getAllBooks = async () => {
        try {
            const res = await api.get("/books")
            setBooks(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const loadBooks = async () => {
            try {
                const res = await api.get("/books")
                setBooks(res.data.data)
            } catch (err) {
                console.log(err)
            }
        }

        loadBooks()
    }, [])

    const handleIsbnChange = (e) => {
        const value = e.target.value
        setIsbn(value)

        if (!value.trim()) {
            getAllBooks()
        }
    }

    const handleSearch = async () => {
        if (!isbn.trim()) {
            getAllBooks()
            return
        }

        try {
            const res = await api.get(`/books/${isbn}`)
            setBooks([res.data.data])
        } catch (err) {
            alert("Book not Found")
            console.log(err)
            setBooks([])
        }
    }

    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-3 text-center">
                <label className="text-sm font-semibold text-slate-700">Search Book</label>
                <div className="flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <input
                        type="text"
                        value={isbn}
                        placeholder="Enter ISBN"
                        onChange={handleIsbnChange}
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200 sm:w-80"
                    />
                    <button
                        onClick={handleSearch}
                        className="rounded-lg bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                        Search
                    </button>
                </div>
            </div>

            {books.length === 0 ? (
                <p className="mt-8 text-center text-slate-500">No books found.</p>
            ) : (
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {books.map((book) => (
                        <Card key={book.isbn || book.id} book={book} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Search
