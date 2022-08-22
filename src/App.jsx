import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Bio from './pages/Bio'
import Idk from './pages/Idk'
import MainPage2 from './pages/MainPage2'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="bio" element={<Bio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="idk" element={<Idk />} />
          <Route path="main" element={<MainPage2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
