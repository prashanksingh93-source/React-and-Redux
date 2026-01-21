
import { Route, Routes, Link } from 'react-router-dom'
import Home from './component/Home'
import About from './component/about'

function App() {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
