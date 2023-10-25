import React from "react";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";

function App() {
  return (
    <div
      id="app-container"
      className="mx-auto box-border flex w-full max-w-5xl flex-col p-4 text-black md:flex-row"
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700;900&display=swap');
      </style>
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
