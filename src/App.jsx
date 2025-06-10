import { useState } from 'react'
import './App.css'
import MovieCard from './MovieCard'
import Header from './Header'
import data from './data/data.js'
const App = () => {


  return (

    <div className="App">
      <div className = "header">
        <Header />
      </div>

      <div className="movieCard">
      {data.results.map((movie) => {
        return <MovieCard name={movie.title} rating={movie.vote_average} img={movie.poster_path} />
        })}
      </div>

    </div>
  )
}

export default App
