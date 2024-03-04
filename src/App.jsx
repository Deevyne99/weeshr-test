import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Article from './pages/Article'
import Navbar from './components/Navbar'

// import { useState } from 'react'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='article/:id' element={<Article />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
