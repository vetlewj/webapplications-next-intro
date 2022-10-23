import axios from 'axios'
import { useEffect, useState } from 'react'
import { Movie } from '../api/movies'

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([])
  const getMovies = async () => {
    try {
      const response = await axios.get('api/movies')
      setMovies(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getMovies()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await axios.post('api/movies/', {
      id: movies.length + 1,
      title: e.currentTarget.movieTitle.value,
      year: e.currentTarget.year.value,
      rating: e.currentTarget.rating.value,
    })
    await getMovies()
  }

  return (
    <>
      <h1>Movies</h1>
      <section>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              {movie.title} ({movie.year}) - {movie.rating}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="movieTitle">Tittel</label>
          <input type="text" name="movieTitle" id="movieTitle" />
          <br />
          <label htmlFor="year">År</label>
          <input type="text" name="year" id="year" />
          <br />
          <label htmlFor="rating">Rangering</label>
          <input type="text" name="rating" id="rating" />
          <br />
          <button type="submit">Legg til film</button>
        </form>
      </section>
    </>
  )
}
