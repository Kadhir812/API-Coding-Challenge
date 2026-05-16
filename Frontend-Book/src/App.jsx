import { Route, Routes } from "react-router-dom"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import DashBoard from "./components/DashBoard"
import Book from "./components/Book"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </>
  )
}

export default App
