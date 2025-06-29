import React from "react";
import Clicked from "./Handling Events/Clicked";
import Inputfield from "./Handling Events/Inputfield";
import LoginStatus from "./Conditional Rendering/LoginStatus";
import VoteEligibility from "./Conditional Rendering/VoteEligibility";
import List from "./Lists and Keys/List";
import UniqueKeys from "./Lists and Keys/UniqueKeys";
import ControlledForm from "./Forms in React/ControlledForm";
import EmailValidation from "./Forms in React/EmailValidation";
import FetchData from "./Lifecycle (Class Components)/FetchData";
import Log from "./Lifecycle (Class Components)/Log";
import UseEffect from "./Hooks/UseEffect";
import Counterusestate from "./Hooks/Counterusestate";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JsonServerCrud from "./JSON-server/JsonServerCrud";
import UserTable from "./JSON-server/UserTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello brijesh</h1>
        {/* <Hello/> */}
        {/* <Dynamicdata/> */}
        {/* <Class/> */}
        {/* <Function/> */}
        {/* <Clicked/> */}
        {/* <Inputfield/> */}
        {/* <LoginStatus/> */}
        {/* <VoteEligibility/> */}
        {/* <List/> */}
        {/* <UniqueKeys/> */}
        {/* <ControlledForm/> */}
        {/* <EmailValidation/> */}
        {/* <FetchData/> */}
        {/* <Log/> */}
        {/* <UseEffect/> */}
        {/* <Counterusestate /> */}
        <JsonServerCrud/>

        <Router>
          <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
            <Link to="/" style={{ marginRight: "15px" }}>
              Home
            </Link>
            <Link to="/about" style={{ marginRight: "15px" }}>
              About
            </Link>
            <Link to="/contact">Contact</Link>
          
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
