import React, { Component } from 'react'
import {Container, Card} from 'react-bootstrap';
import './entry.css';

export default class ir extends Component {
    render() {
        return (
            <Container>
            <section style={{backgroundcolor: "black"}}>
  <h2 class="first-num">-IR Verbs</h2>
  <div class="first-content1">
       <h4 >Rules for -ir ending verbs</h4>
       <h3>- First person singular is represented by the personal subject pronoun je (I).</h3>

        <h3>- Second person singular is represented by the personal subject pronoun tu (you).</h3>

        <h3>- Third person singular is represented by the personal subject pronoun il (he), elle (she) or on (one).</h3>

        <h3>- First person plural is represented by the personal subject pronoun nous (we).</h3>

        <h3>- Second person plural is represented by the personal subject pronoun vous (formal you, you all).</h3>

        <h3>- Third person plural is represented by the personal subject pronoun ils or elles (they).</h3>
        <br/>

        <h4>Verbs Rules of conjugation using finir verb(-to finish)</h4>
    <table>
  <thead>
    <tr>
      <th>je</th>
      <th>tu</th>
      <th>il, elle, on</th>
        <th>nous</th>
        <th >vous</th>
        <th >ils, elles</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >- is</td>
      <td >- is</td>
      <td >- it</td>
        <td >- issons</td>
        <td >- issez</td>
        <td >- issent</td>
    </tr>
    <tr>
      <td >finis</td>
      <td >finis</td>
      <td >finit</td>
        <td >finissons</td>
        <td >finissez</td>
        <td >finissent</td>
    </tr>
  </tbody>
</table>
</div>
</section>
<section style={{ backgroundColor: "skyblue" }}>
            <div className="style">
        <Card className="card-style" style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title className="style1" style={{color: 'black' }}>Word of the day</Card.Title>
            <Card.Subtitle style={{color: 'green' }} >étourdir</Card.Subtitle>
            <Card.Text style={{color: 'red' }}>
            to stun, deafen, make dizzy
            </Card.Text>
        </Card.Body>
        </Card>
        <Card className="card-style" style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title className="style1" style={{color: 'black' }}>Word of the day</Card.Title>
            <Card.Subtitle style={{color: 'green' }} >Grossir</Card.Subtitle>
            <Card.Text style={{color: 'red' }}>
            to gain weight, get fat
            </Card.Text>
        </Card.Body>
        </Card>
        <Card className="card-style" style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title className="style1" style={{color: 'black' }}>Word of the day</Card.Title>
            <Card.Subtitle style={{color: 'green' }} >Maigrir</Card.Subtitle>
            <Card.Text style={{color: 'red' }}>
            to lose weight, get thin
            </Card.Text>
        </Card.Body>
        </Card>
        </div>
        </section>
</Container>
        
        )
    }
}
