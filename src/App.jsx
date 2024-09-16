import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Home from './pages/Home'
import Cart from './pages/Cart'
import Payment from './pages/Payment'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
