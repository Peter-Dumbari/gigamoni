import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserRegistration from "./pages/UserRegistration";
import LoGin from "./pages/Login";
import CompanyRegistration from "./pages/CompanyRegistration";
import Confirmemail from "./pages/ConfirmEmail";
import DashBoard from "./pages/DashBoard";
import Startbiding from "./pages/StartBiding";
import EmptystartBidding from "./pages/EmptyStartBidding";
import StartBiddingFilled from "./pages/StartBiddingFilled";
import Withdrawpopup from "./pages/Withdrawpopup";
import Transactions from "./pages/Transactions";
import Profile from "./pages/Profile";
import Banksetting from "./pages/Banksetting";
import Bankverification from "./pages/Bankverification";
import AddBank from "./pages/AddBank";
import Verifyemail from "./pages/Verifyemail";
import { PrivateRoutes } from "./components/Privateroutes";
import Logout from "./pages/Logout ";
import CreateIpos from "./pages/CreateIpos";
import CompanyVerification from "./pages/CompanyVerification/CompanyVerification";
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
        <Route path="/verifyemail" element={<Verifyemail />}></Route>
        <Route path="/confirmEmail" element={<Confirmemail />}></Route>
        <Route
          path="/CompanyVerification"
          element={<CompanyVerification />}
        ></Route>
        <Route element={<PrivateRoutes />}>
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
          <Route path="/verifyemail" element={<Verifyemail />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/createipos" element={<CreateIpos />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
