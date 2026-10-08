import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activePage, setActivePage] = useState('home')

  const renderPage = () => {
    switch (activePage) {
      case 'team':
        return <Team />

      case 'contact':
        return <Contact />

      case 'home':
      default:
        return <Home setActivePage={setActivePage} />
    }
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="flex-grow-1">
        {renderPage()}
      </main>

      <Footer />
    </div>
  )
}

export default App