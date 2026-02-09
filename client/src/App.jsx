import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Apply from './pages/Apply'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <div className="starfield"></div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
