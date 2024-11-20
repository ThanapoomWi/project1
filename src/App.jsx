import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";
import Header from "./Layout/Header/Header";
import Review from "./components/Review Management/Review";
import Dashboard from "./components/Dashboard/Dashboard";
import AdminManagement from "./components/Admin Management/AdminManagement";
import Permission from "./components/Permission/Permission";
import AccountStatus from "./components/Account Status/AccountStatus";
import AdminAccout from "./components/Admin Account Management/AdminAccout";
import Login from "./components/Login/Login";

function App() {

  const [slide, setSlide] = useState(false);
  const [status, setStatus] = useState("a");

  function handleSlide() {
    setSlide(!slide);
  }

  if(!status) {

    return (<BrowserRouter>
      <Login setStatus={setStatus}/>
      </BrowserRouter>);

  }

  else {

    return(
        <BrowserRouter>
          <div className="app">
            <Navbar slide={slide} setStatus={setStatus} />
            <div className="main-content">
              <Header handleSlide={handleSlide} />
              <div className="content-area">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/adminmanagement" element={<AdminManagement />} />
                  <Route path="/permission" element={<Permission />} />
                  <Route path="/review" element={<Review />} />
                  <Route path="/status" element={<AccountStatus />} />
                  <Route path="/adminaccmanagement" element={<AdminAccout />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
    )

  }
}

export default App;
