import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Carousel,Button} from 'react-bootstrap'

function Slide() {
    const navigate=useNavigate()
  return (
    <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.immediate.co.uk/production/volatile/sites/25/2020/04/Things-never-knew-astronomy-e454e5d.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Universe</h3>
      <p>The Universe contains billions of galaxies, each containing millions or billions of stars.</p>
      <Button  variant="light" onClick={()=>navigate('/login')}> Login </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TztCwR2nv5RfExkxOxMXfXrPrgI_myVSfw&usqp=CAU"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Stars</h3>
      <p>A star is an astronomical object comprising a luminous spheroid of plasma held together by its gravity.</p>
      <Button variant="light" onClick={()=>navigate('/about')}> About </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.thalesgroup.com/sites/default/files/database/assets/images/2020-11/Planets_copyright_%C2%A9%20Thales%20Alenia%20Space_1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Solar</h3>
      <p>The solar system is made up of the sun and everything that orbits around it, including planets, moons, asteroids, comets and meteoroids.
</p>
<Button variant="light" onClick={()=>navigate('/contactus')}> Contact </Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Slide