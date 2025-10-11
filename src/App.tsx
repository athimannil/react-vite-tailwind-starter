import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <section className="flex min-w-full flex-1 flex-col dark:bg-gray-900">
        <div className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-6 align-middle">
          <div className="mb-8 flex gap-8">
            <a
              href="https://vite.dev"
              target="_blank"
              className="transition-transform hover:scale-110"
            >
              <img
                src={viteLogo}
                className="h-24 w-24 transition-all hover:drop-shadow-lg hover:drop-shadow-blue-400"
                alt="Vite logo"
              />
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              className="transition-transform hover:scale-110"
            >
              <img
                src={reactLogo}
                className="h-24 w-24 animate-spin transition-all hover:drop-shadow-lg hover:drop-shadow-cyan-400"
                alt="React logo"
              />
            </a>
          </div>
          <h1 className="mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-5xl font-bold text-transparent">
            Vite + React + Tailwind
          </h1>
          <div className="rounded-lg border border-gray-700 bg-gray-800 p-8 text-center shadow-xl">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="mb-4 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              count is {count}
            </button>
            <p className="text-gray-300">
              Edit{' '}
              <code className="rounded bg-gray-700 px-2 py-1 text-blue-300">
                src/App.tsx
              </code>{' '}
              and save to test HMR
            </p>
          </div>
          <p className="mt-8 text-gray-400">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
