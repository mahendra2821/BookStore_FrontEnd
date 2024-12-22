import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Books from "./pages/Books";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserAuthentication from "./pages/UserAuthentication";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminAuth from "./pages/AdminAuth";
import AdminSignup from "./pages/AdminSignup";
import BookStore from "./pages/BookStore";
import AdminLogin from "./pages/AdminLogin";
import HomeRoutes from "./HomePages/HomeRoutes";
import AdminSignLogin from "./pages/AdminSignLogin";
import Cart from "./pages/Cart";
import CartPage from "./pages/CartPage";
// import OrderPage from "./pages/OrderPage";
import "./App.css"

const App = () => {
  return (
    <Router>
      <Header />
      <div className="mt-16"> {/* Add margin to avoid content overlapping header */}
        <Routes>
          <Route path="/" element={<HomeRoutes/>}/>
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/usersignup" element={<UserAuthentication/>} />
          <Route path="/adminsignlogin" element={<AdminSignLogin/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cart/:bookId" element={<Cart/>} />
          <Route path="/cartpage" element={<CartPage/>} />
          {/* <Route path="/orderpage" element={<OrderPage/>} /> */}

          




          <Route path="/adminrules" element={<AdminAuth/>} />
          <Route path="/adminsignup" element={<AdminSignup/>} />
          <Route path="/adminlogin" element={<AdminLogin/>} />




          <Route path="/bookstore" element={<BookStore/>} />


          
        </Routes>
      </div>
    </Router>
  );
};

export default App;



