const Card = ({ book = {}, onEdit, onDelete }) => {
	const { title = "Untitled", author = "Unknown", isbn, publicationYear, description } = book || {}

	return (
		<div className="h-full w-full rounded-xl bg-white shadow-md overflow-hidden">
			<div className="p-6">
				<div className="flex items-start justify-between">
					<div>
						<h3 className="text-xl font-semibold text-gray-900">{title}</h3>
						<p className="text-sm text-gray-600">by {author}</p>
					</div>
					<div className="text-sm text-gray-500">{publicationYear || "--"}</div>
				</div>

				{description && <p className="mt-3 text-sm text-gray-500 line-clamp-3">{description}</p>}

				<div className="mt-4 flex items-center justify-between">
					<div className="text-xs text-gray-500">ISBN: {isbn || "N/A"}</div>
					<div className="flex space-x-2">
						{onEdit && (
							<button
								onClick={() => onEdit(book)}
								className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
							>
								Edit
							</button>
						)}
						{onDelete && (
							<button
								onClick={() => onDelete(book)}
								className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
							>
								Delete
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card

