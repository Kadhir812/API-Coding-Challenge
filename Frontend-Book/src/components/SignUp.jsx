import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../api/axios"

const SignUp = () => {

    const navigate = useNavigate()

    const[registerdata,setRegisterData] = useState({
        username:"",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setRegisterData({...registerdata, [name]: value})
    }

    const handleSubmit = async () => {
        try {
                await api.post("auth/register",registerdata)
                alert("Signup successfull")

                navigate("/dashboard")
        } catch {
                alert("Signup failed")
        }
    }


    return(
        <div className="min-h-screen bg-slate-100 px-4 py-10">
                <div className="mx-auto w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
                        <h1 className="mb-6 text-center text-3xl font-bold text-slate-800">Sign Up</h1>

                        <div className="space-y-4">
                                <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Username</label>
                                        <input
                                                type="text"
                                                name="username"
                                                placeholder="Enter Username"
                                                value={registerdata.username}
                                                onChange={handleChange}
                                                className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                                        />
                                </div>

                                <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                                        <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter Email"
                                                value={registerdata.email}
                                                onChange={handleChange}
                                                className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                                        />
                                </div>

                                <div>
                                        <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
                                        <input
                                                type="password"
                                                name="password"
                                                placeholder="Enter password"
                                                value={registerdata.password}
                                                onChange={handleChange}
                                                className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                                        />
                                </div>

                                <button
                                        onClick={handleSubmit}
                                        className="w-full rounded-md bg-emerald-600 px-4 py-2 font-semibold text-white transition hover:bg-emerald-700"
                                >
                                        Register
                                </button>

                                <Link to="/" className="block text-center text-sm font-medium text-emerald-700 hover:text-emerald-800">
                                        Already have account?
                                </Link>
                        </div>
                </div>
        </div>
    )

}

export default SignUp