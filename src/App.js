import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </>
  )
}
export default App
