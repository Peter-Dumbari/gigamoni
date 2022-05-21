import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import UserRegistration from "./components/pages/UserRegistration";
import LoGin from "./components/pages/Login";
import CompanyRegistration from "./components/pages/CompanyRegistration";
import Confirmemail from "./components/pages/ConfirmEmail";
import DashBoard from "./components/pages/DashBoard";
import Startbiding from "./components/pages/StartBiding";
import EmptystartBidding from "./components/pages/EmptyStartBidding";
import StartBiddingFilled from "./components/pages/StartBiddingFilled";
import Withdrawpopup from "./components/pages/Withdrawpopup";
import Transactions from "./components/pages/Transactions";
import Profile from "./components/pages/Profile";
import Banksetting from "./components/pages/Banksetting";
import Bankverification from "./components/pages/Bankverification";
import AddBank from "./components/pages/AddBank";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/userregistration" element={<UserRegistration />}></Route>
        <Route path="/login" element={<LoGin />}></Route>
        <Route
          path="/companyregistration"
          element={<CompanyRegistration />}
        ></Route>
        <Route path="/confirmEmail" element={<Confirmemail />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/startbiding" element={<Startbiding />}></Route>
        <Route
          path="/emptystartbidding"
          element={<EmptystartBidding />}
        ></Route>
        <Route path="/startbiddings" element={<StartBiddingFilled />}></Route>
        <Route path="/transactions" element={<Transactions />}></Route>
        <Route path="/withdraw" element={<Withdrawpopup />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/banksetting" element={<Banksetting />}></Route>
        <Route path="/verification" element={<Bankverification />}></Route>
        <Route path="/addBank" element={<AddBank />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
