import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../api/axios"

const Login = () => {

    const navigate = useNavigate()

    const [logindata,setLoginData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setLoginData({...logindata, [name]: value})
    }

    const handleSubmit = async () => {
        try {
            const res = await api.post("/auth/login", logindata)

            localStorage.setItem("email", logindata.email)
            localStorage.setItem("token", res.data.data)

            alert("Login Successful")

            navigate("/dashboard")
        } catch {
            alert("Login failed")
        }
    }

    

    return(
            <div className="min-h-screen bg-slate-100 px-4 py-10">
                <div className="mx-auto w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
                    <h1 className="mb-6 text-center text-3xl font-bold text-slate-800">Login</h1>

                    <div className="space-y-4">
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                onChange={handleChange}
                                className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                onChange={handleChange}
                                className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="w-full rounded-md bg-cyan-600 px-4 py-2 font-semibold text-white transition hover:bg-cyan-700"
                        >
                            Login
                        </button>

                        <Link to="/signup" className="block text-center text-sm font-medium text-cyan-700 hover:text-cyan-800">
                            New user?
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default Login