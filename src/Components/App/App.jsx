import React from 'react';
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Section2'

function App() {
  return (
    <div id="app-container" className='w-full max-w-5xl p-4 mx-auto text-black box-border flex flex-col md:flex-row'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap');
      </style>
      <Section1/>
      <Section2/>
    </div>
  );
}

export default App;
