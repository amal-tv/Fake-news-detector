

import './App.css'
import { FakeNewsChecker } from './components/FakeNewsChecker'


function App() {
  

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="h-[250px] flex justify-center p-4 gap-2 items-center pl-8
       text-white pt-2">
        <h1 className="text-9xl font-bold font-serif">Fake Guard</h1>
        <img src="../src/assets/fakeguard-logo.svg" alt="Fake News Warning" className="w-[250px] h-auto rounded-md shadow-lg" />

      </div>
      <FakeNewsChecker />
    </div>
  )
}

export default App
