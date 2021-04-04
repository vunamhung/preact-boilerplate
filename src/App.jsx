import React, { useState } from 'react';
import logo from '@/assets/images/logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class='text-center'>
      <header class='bg-[#282c34] h-screen text-white flex flex-col justify-center items-center'>
        <img src={logo} class='h-60 inline' alt='logo' />
        <p class='text-6xl font-bold mb-8'>Hello Vite + Preact!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>count is: {count}</button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a class='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
            Learn React
          </a>
          {' | '}
          <a class='App-link' href='https://vitejs.dev/guide/features.html' target='_blank' rel='noopener noreferrer'>
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
