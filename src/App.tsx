import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/actions";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post/:id" element={<Posts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
