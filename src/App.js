import React, { useEffect } from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";

const BASE_URL = "http://api.exchangeratesapi.io/v1/latest?";
const ACCESS_KEY = "027b0a1b1e93e7c46eb16ae0f4293621";

function App() {
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <h1> Convert </h1>
      <CurrencyRow />
      <div className="equals"> = </div>
      <CurrencyRow />
    </>
  );
}

export default App;
