import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">

      {/* HERO SECTION */}
      <section className="text-center space-y-6">
        
        <div className="flex items-center justify-center gap-6">
          <img src={heroImg} className="w-32 h-auto" alt="Hero" />
          <img src={reactLogo} className="w-16 animate-spin-slow" alt="React logo" />
          <img src={viteLogo} className="w-16" alt="Vite logo" />
        </div>

        <h1 className="text-4xl font-bold text-blue-400">
          Tailwind Test UI 🚀
        </h1>

        <p className="text-gray-300">
          Edit <code className="bg-gray-800 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
        </p>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded-lg font-semibold shadow-lg"
        >
          Count is {count}
        </button>

      </section>

      {/* NEXT STEPS */}
      <section className="mt-16 grid md:grid-cols-2 gap-8 max-w-3xl w-full">

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-2 text-green-400">Documentation</h2>
          <p className="text-gray-400 mb-4">Your questions, answered</p>

          <ul className="space-y-2">
            <li>
              <a href="https://vite.dev/" target="_blank" className="flex items-center gap-2 hover:text-blue-400">
                <img src={viteLogo} className="w-5" alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" className="flex items-center gap-2 hover:text-blue-400">
                <img src={reactLogo} className="w-5" alt="" />
                Learn React
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-2 text-pink-400">Connect</h2>
          <p className="text-gray-400 mb-4">Join the community</p>

          <ul className="space-y-2">
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank" className="hover:text-blue-400">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank" className="hover:text-blue-400">
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank" className="hover:text-blue-400">
                X (Twitter)
              </a>
            </li>
          </ul>
        </div>

      </section>

    </div>
  )
}

export default App