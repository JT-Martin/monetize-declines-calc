import React, { useRef, useEffect } from "react";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";

function App() {
  const appContainerRef = useRef(null);

  useEffect(() => {
    // Function to update dimensions
    const updateDimensions = () => {
      if (appContainerRef.current) {
        const appContainer = appContainerRef.current;
        const containerWidth = appContainer.clientWidth;
        const containerHeight = appContainer.clientHeight + 50;
        console.log(containerWidth);
        console.log(containerHeight);

        // Send the dimensions to the parent page
        window.parent.postMessage(
          { width: containerWidth, height: containerHeight },
          "*",
        );
      }
    };

    // Call the updateDimensions function initially
    updateDimensions();

    // Add event listener to recalculate dimensions on window resize
    window.addEventListener("resize", updateDimensions);

    return () => {
      // Remove event listener when component unmounts
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div
      id="app-container"
      className="mx-auto box-border flex w-full max-w-5xl flex-col p-4 text-black md:flex-row"
      ref={appContainerRef}
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
