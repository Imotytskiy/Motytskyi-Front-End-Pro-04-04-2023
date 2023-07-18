import React, { useState } from "react";
import Header from "./components/Header/Header";
import Navleft from "./components/Nav/Navleft";
import Container from "./components/Container/Container";
import "./App.css";

function App() {
  const [selectedEventKey, setSelectedEventKey] = useState(null);

  const handleEventKeyChange = (eventKey) => {
    setSelectedEventKey(eventKey);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="container">
        <Navleft onEventKeyChange={handleEventKeyChange} />
        <Container selectedEventKey={selectedEventKey} />
      </div>
    </>
  );
}

export default App;
