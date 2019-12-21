import React from "react";
import './entry.css';
import { Container, Card } from "react-bootstrap";

function Entry(){
  return(
    <Container>
<section style={{backgroundcolor: "black"}}>

<h2 className="first-num">ER Verbs</h2>
<div className="first-content">
  
      <h4>Rules for -er ending verbs</h4>
     <h3>* First person singular is represented by the personal subject pronoun je (I).</h3>

      <h3>* Second person singular is represented by the personal subject pronoun tu (you).</h3>

      <h3>* Third person singular is represented by the personal subject pronoun il (he), elle (she) or on (one).</h3>

      <h3>* First person plural is represented by the personal subject pronoun nous (we).</h3>

      <h3>* Second person plural is represented by the personal subject pronoun vous (formal you, you all).</h3>

      <h3>* Third person plural is represented by the personal subject pronoun ils or elles (they).</h3>
      <br/>
  <h4>Verbs Rules of conjugation using parler verb(-to speak)</h4>
  <table>
<thead>
  <tr>
    <th>je</th>
    <th >tu</th>
    <th>il, elle, on</th>
      <th>nous</th>
      <th >vous</th>
      <th >ils, elles</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>- e</td>
    <td>- es</td>
    <td >- e</td>
      <td >- ons</td>
      <td >- ez</td>
      <td >- ent</td>
  </tr>
  <tr>
    <td >parle</td>
    <td >parles</td>
    <td >parle</td>
      <td>parlons</td>
      <td >parlez</td>
      <td >parlent</td>
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
            <Card.Subtitle style={{color: 'green' }} >abaisser</Card.Subtitle>
            <Card.Text style={{color: 'red' }}>
            to lower, to push/pull down
            </Card.Text>
        </Card.Body>
        </Card>
        <Card className="card-style" style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title className="style1"  style={{color: 'black' }}>Word of the day</Card.Title>
            <Card.Subtitle style={{color: 'green' }} >marcher</Card.Subtitle>
            <Card.Text style={{color: 'red' }}>
            to walk, to function
            </Card.Text>
        </Card.Body>
        </Card>
        <Card className="card-style" style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title className="style1"  style={{color: 'black' }}>Word of the day</Card.Title>
            <Card.Subtitle style={{color: 'green' }} >partager</Card.Subtitle>
            <Card.Text style={{color: 'red' }}>
            to share
            </Card.Text>
        </Card.Body>
        </Card>
        </div>
        </section>
</Container>
);
}

export default Entry;