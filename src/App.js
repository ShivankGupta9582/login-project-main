import * as React from "react";
import { createRoot } from "react-dom/client";
import { useContext, useState, useEffect } from "react";
import {
  BrowserRouter,
  RouterProvider,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Navbar from "./components/Navbar";

export const AppContext = React.createContext();
const App = ({ children }) => {
  //define key value pairs for the local storage
  // const value=localStorage.getItem('logged') || '';
  // let x=true;
  // if(value.key==='logged')
  //   x=true;
  //   else
  //   x=false;
  const [userLogged, setUserLogged] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [showPrompt, setPrompt] = useState(true);
  //for initial render
  useEffect(() => {
    const storedUserLogged = localStorage.getItem('userLogged');
    if (storedUserLogged === 'true') {
      setUserLogged(true);
    }
  }, []);
  //for change in state of userLogged
  useEffect(() => {
    localStorage.setItem('userLogged', userLogged.toString());
  }, [userLogged]);




  //for the initial render
  useEffect(() => {
    const userData = localStorage.getItem('userInfo');
    if (userData !== 'null') {
      const data = JSON.parse(userData);
      setUserInfo(data);
    }
  }, []);
  //for change in state of the userdata
  useEffect(() => {
    const jsonStr = JSON.stringify(userInfo);
    localStorage.setItem('userInfo', jsonStr);
  }, [userInfo]);




   //for initial render
   useEffect(() => {
    const showPromptStatus = localStorage.getItem('showPrompt');
    if (showPromptStatus === 'false') {
      setPrompt(false);
    }
  }, []);
  //for change in state of prompt
  useEffect(() => {
    localStorage.setItem('showPrompt', showPrompt.toString());
  }, [showPrompt]);
  const updateUserInfo = (data) => {
    setUserInfo(data);
  }
  const updateUserLogin = (bool) => {
    setUserLogged(bool);
  }
  const updatePromptStatus = (bool) => {
    setPrompt(bool);
  }

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ userLogged, userInfo, updateUserInfo, updateUserLogin, showPrompt, updatePromptStatus }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  )
}
export default App
