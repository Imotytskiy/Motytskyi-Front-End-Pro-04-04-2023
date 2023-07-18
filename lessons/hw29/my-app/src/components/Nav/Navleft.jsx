import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import "./Navleft.css";
import "bootstrap/dist/css/bootstrap.min.css";

const cities = ["KYIV", "BERLIN", "PARIS", "MADRID", "ROME", "WARSAWA"];

function Navleft({ onEventKeyChange }) {
  const [activeKey, setActiveKey] = useState("/home");

  const handleNavClick = (eventKey) => {
    setActiveKey(eventKey);
    onEventKeyChange(eventKey);
  };

  return (
    <Nav variant="pills" defaultActiveKey={activeKey} className="flex-column">
      {cities.map((city, index) => (
        <Nav.Link
          key={index}
          eventKey={index.toString()}
          onClick={() => handleNavClick(index.toString())}
        >
          {city}
        </Nav.Link>
      ))}
    </Nav>
  );
}

export default Navleft;
