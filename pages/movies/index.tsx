import axios from 'axios'
import { useEffect, useState } from 'react'
import { Movie } from '../api/movies'

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([])
  const getMovies = async () => {
    try {
      const response = await axios.get('api/movies')
      setMovies(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getMovies()
  }, [movies])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await axios.post('api/movies/', {
      id: 0,
      title: e.currentTarget.movieTitle.value,
      year: e.currentTarget.year.value,
      rating: e.currentTarget.rating.value,
    })

    await getMovies()
  }

  return (
    <>
      <h1>Movies</h1>
      <section>{JSON.stringify(movies)}</section>
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
