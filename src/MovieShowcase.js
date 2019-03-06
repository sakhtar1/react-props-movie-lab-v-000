import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    this.props.movieData.map(map =>
      <movieData
  					title={movieData.title}
  					IMDBRating={movieData.IMDBRating}
  					genres={movieData.genres}
  					poster={movieData.poster}/>
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
