import { useEffect, useState } from 'react'
import './App.css'
import MovieBox from './components/MovieBox'
import { Col, Row } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

const API_URL = "https://api.themoviedb.org/3/trending/all/week?api_key=47de2b9e8b2462b53975d18185ac40bf&language=en-US"

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {

    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results)
      })

  }, [])

  return (
    <>
      <Header/>
      <Row>
        {movies.map((movieReq) => (
          <Col className='text-center p-3'>
            <div className='d-flex justify-content-center'>
              <MovieBox key={movieReq.id} {...movieReq} />
            </div>
          </Col>

        ))}
      </Row>

      <div className='pt-5 pb-3'><Footer/></div>

    </>
  )
}

export default App
