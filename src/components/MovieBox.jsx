import React, { useState } from 'react'
import '../index.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal } from 'react-bootstrap';

const API_IMG = "https://image.tmdb.org/t/p/w500"

function MovieBox({ title, poster_path, vote_average, release_date, overview }) {

    const [show, setShow]=useState(false)

    const handleShow=()=>setShow(true)
    const handleClose=()=>setShow(false)

    return (
        <div className='shadow'>
            <Card style={{ width: '18rem' }}>
                <Card.Img src={API_IMG + poster_path} />
                <Card.Body>
                    {/* <Card.Title>{title}</Card.Title>
                            <Card.Text>
                            {overview}
                            </Card.Text> */}
                    <Button variant="dark" onClick={handleShow}>View More</Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={API_IMG + poster_path} alt="" width={300}/>
                            <h3 className='mt-3'>{title}</h3>
                            <h4>IMDB : {vote_average}</h4>
                            <h5>Release Date : {release_date}</h5>
                            <br />
                            <h6>Overview :</h6>
                            <p style={{textAlign:'justify'}}>{overview}</p>
                        </Modal.Body>
                    </Modal>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieBox