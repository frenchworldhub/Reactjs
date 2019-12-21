import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import './Grid.css';

export default class Grid extends Component {
    render() {
        return (
            
                <Container>
  <Row>
  <Col style={{marginTop:"7%", color: "white"}}>Montpellier, city, capital of Hérault département and second largest
     city in the Occitanie région, southern France, located 7 miles (12 km) from 
     the Mediterranean coast. An old university city, Montpellier is the chief 
     administrative and commercial centre of the Occitanie region.</Col>
    <Col>
      <img class="img-col" src="./assets/monti.jpg" alt="ad"></img>
 
    </Col>
    
  </Row>
  <Row>
    <Col style={{marginTop:"7%", color: "white"}}>Bordeaux, hub of the famed wine-growing region, is a port city on the Garonne 
    River in southwestern France. It’s known for its Gothic Cathédrale Saint-André, 
    18th- to 19th-century mansions and notable art museums such as the Musée des 
    Beaux-Arts de Bordeaux. </Col>
    <Col>
      <img class="img-col" src="./assets/bordeaux.jpg" alt="montipiller"></img>  
        
          </Col>
  </Row>
</Container>
        )
    }
}
