import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import slidea from '../assets/slidea.jpg'
import slideb from '../assets/slideb.jpg'
import slidec from '../assets/slidec.jpg'


const Projects = () => {
  return (
    <div className='picture'>
        <div>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={slideb} />
    <Card.Body>
      <Card.Title>Project 1</Card.Title>
      
      <Button >learn more</Button>
    </Card.Body>
  </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={slidea}/>
    <Card.Body>
      <Card.Title>Project 2</Card.Title>
      
      <Button >learn more</Button>
    </Card.Body>
  </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={slidec} />
    <Card.Body>
      <Card.Title>Project 3</Card.Title>
      
      <Button >learn more</Button>
    </Card.Body>
  </Card>
        </div>
    </div>
  )
}

export default Projects