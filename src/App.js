import React, { Component } from 'react'

import Header from './Header'
import './App.css'
import MovieList from './MovieList'
import { getMovies, createMovie, deleteMovie } from './Api'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    getMovies().then(response => {
      this.setState({ movies: response.data })
    })
  }
  deleteMovie = movie => {
    console.log(movie)
  }
  addMovie = movie => {
    const newMovie = {
      ...movie,
      id: movie.imdb_id,
      name: movie.title
    }

    createMovie(newMovie).then(() => {
      this.setState({
        movies: [newMovie, ...this.state.movies]
      })
    })
  }
  render() {
    return (
      <div>
        <Header />
        <MovieList
          movies={this.state.movies}
          addMovie={this.addMovie}
          deleteMovie={this.deleteMovie}
        />
      </div>
    )
  }
}

export default App
