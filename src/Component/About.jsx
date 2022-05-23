import React from 'react'
import {CardGroup,Card} from 'react-bootstrap'

function About() {
  return (
    <div>
       <h2><i> Space is the boundless three-dimensional extent in which objects and events have relative position and direction.</i></h2>
       <CardGroup>
  <Card>
    <Card.Img variant="top"size="50px" src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2003/05/gro_ji655-40_a_black_hole_hurtles_across_the_plane_of_the_milky_way2/17911787-2-eng-GB/GRO_JI655-40_a_black_hole_hurtles_across_the_plane_of_the_Milky_Way.jpg" />
    <Card.Body>
      <Card.Title>Milky Way</Card.Title>
      <Card.Text>
      The Milky Way is shaped like a huge whirlpool that rotates once every 200 million years. It is made up of at least 100 billion stars, as well as dust and gas. It is so big that light takes
100 000 years to cross from one side to the other.

The centre of the Galaxy is very hard to see because clouds of gas and dust block our view. Scientists think that it contains a supermassive black hole that swallows anything passing too close.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" size="50px" src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2003/04/was_our_moon_once_part_of_earth2/17885952-2-eng-GB/Was_our_Moon_once_part_of_Earth.jpg" />
    <Card.Body>
      <Card.Title>Birth Of Moon</Card.Title>
      <Card.Text>
      The Moon has been circling the Earth for more than four billion years. But where did it come from? Some scientists thought that it was captured by the Earth when it came too close. Others thought that it was once part of the Earth.

Today, most scientists believe it is the 'Earth's child'. It was born when a wandering planet crashed into the young Earth. Huge amounts of material were thrown into space, eventually coming together to form the Moon. This 'big splash' theory would explain why the Moon’s rocks are very similar to those on the Earth.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" size="50px" src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2013/07/meteor_shower/17904232-2-eng-GB/Meteor_shower.jpg" />
    <Card.Body>
      <Card.Title>Meteros</Card.Title>
      <Card.Text>
      The Solar System is full of material left over from the formation of the planets. Small chunks of rock that travel through space are known as meteoroids. If they enter a planet’s atmosphere and burn up, they are then seen as meteors. Sometimes larger pieces of rock survive long enough to crash into a planet’s surface. Space rocks on the Earth’s surface are known as meteorites.

Meteors (often called “shooting stars”) are very common sights. Anyone who stares at a clear night sky will eventually see these brief trails of light. Meteors are caused by meteorites entering the upper atmosphere at speeds of around 15 km/s! Meteor trails usually last for less than a second. Friction with the thin air at an altitude of about 100 km causes meteorites to glow as they are heated and then destroyed.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"> </small>
    </Card.Footer>
  </Card>
</CardGroup>
    </div>
  )
}

export default About