import { useState } from "react";
import "./App.css";
import { styled } from "styled-components";
import Home from "./Home";
import Highlights from "./Highlights";
import Contact from "./Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Highlights />
      <Contact />
    </>
  );
}

export default App;
