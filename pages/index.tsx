import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Link href="/movies">Filmer</Link>
    </>
  )
}

export default Home
