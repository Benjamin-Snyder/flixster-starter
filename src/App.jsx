import { useState } from 'react'
import './App.css'
import Header from './Header'
import MovieList from './MovieList'

const App = () => {


  return (

    <div className="App">
      <div className = "header">
        <Header />
      </div>

      <div className="movieCard">
        <MovieList />
      </div>

    </div>
  )
}

export default App
