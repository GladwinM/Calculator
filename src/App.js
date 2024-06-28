/* eslint-disable */
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Calculator from "./components/calculator";
import Home from "./components/home";
import Quote from "./components/quote";
import Navbar from "./components/navbar";
import "./App.css";
import { useEffect } from "react";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

function App() {
  useEffect(() => {
    let randomNum = Math.floor(Math.random() * 5);
    let quotes = [
      "a Mathematics is not about numbers, equations, computations or algorithms: it is about understanding. - William Paul Thurston",
      "b is not about numbers, equations, computations or algorithms: it is about understanding. - William Paul Thorston",
      "c Mathematics it numbers, equations, computations or algorithms: it is about understanding. - William Paul Thorston",
      "d Mathematics is not a equations, computations or algorithms: it is about understanding. - William Paul Thorston",
      "e Mathematics is not about num, computations or algorithms: it is about understanding. - William Paul Thorston",
    ];

    let randomQuote = quotes[randomNum];

    localStorage.setItem("randomQuote", randomQuote);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
