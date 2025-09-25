import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import WelcomePageWrapper from "./WelcomePageWrapper";
import "./index.css";
import './App.css';
import './WelcomePage.css';

// Get the root element and assert it's an HTMLElement
const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* BrowserRouter provides routing capabilities */}
    <BrowserRouter>
      <Routes>
        {/* Default route (homepage) → shows the App component */}
        <Route path="/" element={<App />} />

        {/* Dynamic route with a "name" parameter → shows the WelcomePage */}
        <Route path="/welcome/:name" element={<WelcomePageWrapper />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
