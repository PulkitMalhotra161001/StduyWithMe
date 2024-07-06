//suspense API, asynchronous component fetching, asychronous data fetching
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
//we can avaoid using curly braces if we added default in the component export
//lazy routing usd to load page1 component when page1 clicked
const Dashboard = React.lazy(() => import("../components/Dashboard"));
// import  Dashboard  from "../components/Dashboard";
import { Landing } from "../components/Landing";

function App() {
  //we have to use suspense API

  return (
    <BrowserRouter>
      {/* useNavigate used to navigate between pages and it must be made inside BrowserRouter */}
      <Appbar />
      <Routes>
        <Route
          path="/dashboard"
          element={
            //  routes take some seconds to render in between the time what it will render handled by suspense 
            <Suspense fallback={"..loading"}>
              {" "}
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <Landing />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => navigate("/")}>Landing</button>
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      </div>
    </div>
  );
}

export default App;
