import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Dashboard from "./components/dashboard";
import Login from "./components/login/Login";
import CertificateList from "./components/list/CertificateList";
import { Provider } from "react-redux";
import Store from "./store/Store";
import NewEntry from "./components/newentry/NewEntry";
import QRCodeScanner from "./components/list/QRCodeScanner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Qrcode" element={<QRCodeScanner />} />
          <Route path="/new-entry" element={<NewEntry />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/certificate-list" element={<CertificateList />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
