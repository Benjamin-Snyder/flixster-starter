import { useState } from 'react'
import './App.css'
import MovieCard from './MovieCard'
import Header from './Header'
import MovieList from './MovieList.jsx'

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>

      <div className="movieCard">
        <MovieList />
      </div>
    </div>
  )
}

export default App
