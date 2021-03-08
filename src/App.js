import React, { useState } from "react";

import Counters from "./components/counters";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import CounterContext from "./components/counterContext";

function App() {
  let counters = useState([
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ]);

  return (
    <>
      <CounterContext.Provider value={counters}>
        <main className="container m-4">
          <Movies />
        </main>
      </CounterContext.Provider>
    </>
  );
}

export default App;
