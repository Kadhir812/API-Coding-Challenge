import { Link } from "react-router-dom"

const Header = () => {
	return (
		<header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
			<div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
				<div className="flex items-center gap-3">
					<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
						BK
					</div>
					<div>
						<h1 className="text-lg font-semibold text-slate-900">BookHub</h1>
						<p className="text-xs text-slate-500">Manage your collection</p>
					</div>
				</div>

				<nav className="hidden items-center gap-6 md:flex">
					<Link to="/dashboard" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
						Home
					</Link>
					<Link to="/book" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
						Books
					</Link>
					<a href="#" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
						About
					</a>
				</nav>

				<div className="flex items-center gap-2 sm:gap-3">
					<Link
						to="/"
						className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900 sm:px-4 sm:text-sm"
					>
						Log Out
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
