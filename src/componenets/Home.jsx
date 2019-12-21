import React, { Component } from 'react'
import { Container, Carousel } from 'react-bootstrap';
import Grid from './Grid';

import './Home.css';


export default class Home extends Component {
    render() {
        return (
          
           
            <Container>
            <section>
      <article>
        <img className="img" src="assets/france.png" alt="" />
        <h1>France</h1>
        <p className="date">Date: 26 November 2019</p>
        <p className="date2">
          Hi,
          <br />
          Welcome to the 
          <a class="content-color" href=".">
            <strong> French World</strong>,
          </a>
          <br />
          French is the very beautiful language .As we know,more than 300
          Million people speak French on the five continents. It's very easy
          language to learn if you try to learn by heart I am sharing my upmost
          knowledge to help you by this blog 
          <strong>(Akash Bisht)</strong>
          <br />
          <span class="term">
            <em>Bon courage</em>
          </span>{" "}
          !<br />
        </p>
      </article>
    </section>
    <section>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block carousel-img"
      src="./assets/tower4.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="first-num">A world language</h3>
      <p className="first-num2">More than 300 million people speak French on the five continents.
         French is the second most 
          widely learned foreign language after English, and the fifth most widely
           spoken language in the world.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carousel-img"
      src="./assets/tower2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="first-num">The language of culture</h3>
      <p className="first-num2">French is the international language of cooking, fashion, theatre, 
      the visual arts, dance and architecture. A knowledge of French offers access to great works 
      of literature in the original French, as well as films and songs.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carousel-img"
      src="./assets/tower.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="first-num">The language of love and reason</h3>
      <p className="first-num2">First and foremost, learning French is the pleasure of learning a beautiful, rich, melodious
         language that is often called the language of love. French is also an analytical language
          that structures thought and develops critical thinking, which is a valuable skill for discussions
           and negotiations.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</section>
<section>
<Grid />
</section>
            </Container>
            
          
        )
    }
}
