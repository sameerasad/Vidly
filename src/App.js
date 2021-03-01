import React, { useState } from "react";

import Counters from "./components/counters";
import Movies from "./components/movies";
import NavBar from "./components/navBar";

function App() {
  let [counters, setCounters] = useState([
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ]);

  const handleDelete = (counterId) => {
    console.log("event handler called", counterId);
    const newCounters = counters.filter((c) => c.id !== counterId);
    return setCounters(newCounters);
  };

  const handleIncreament = (counter) => {
    counters = [...counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    setCounters(counters);
  };

  const handleDecreament = (counter) => {
    counters = [...counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;

    setCounters(counters);
  };

  const handleReset = () => {
    const reset = counters.map((c) => {
      c.value = 0;
      return c;
    });
    return setCounters(reset);
  };
  return (
    <>
      <NavBar />
      <main className="container m-4">
        <Counters
          counters={counters}
          onReset={() => handleReset()}
          onDelete={() => handleDelete()}
          onIncreament={() => handleIncreament()}
          onDecreament={() => handleDecreament()}
        ></Counters>
      </main>
    </>
  );
}

export default App;
