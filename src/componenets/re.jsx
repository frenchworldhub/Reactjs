import React, { Component } from 'react'
import { Container, Card } from "react-bootstrap";
import './entry.css';

export default class re extends Component {
    render() {
        return (
    <Container>
        <section style={{backgroundcolor: "black"}}>
        <h2 class="first-num">-RE Verbs</h2>
        <div class="first-content2">
            
                <h4>Rules for -re ending verbs</h4>
            <h3>* First person singular is represented by the personal subject pronoun je (I).</h3>

                <h3>* Second person singular is represented by the personal subject pronoun tu (you).</h3>

                <h3>* Third person singular is represented by the personal subject pronoun il (he), elle (she) or on (one).</h3>

                <h3>* First person plural is represented by the personal subject pronoun nous (we).</h3>

                <h3>* Second person plural is represented by the personal subject pronoun vous (formal you, you all).</h3>

                <h3>* Third person plural is represented by the personal subject pronoun ils or elles (they).</h3>
                <br/>
            <h4>Verbs Rules of conjugation using vendre verb(-to sell)</h4>
            <table>
        <thead>
            <tr>
            <th>je</th>
            <th >tu</th>
            <th>il, elle, on</th>
                <th>nous</th>
                <th>vous</th>
                <th>ils, elles</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td >- s</td>
            <td >- s</td>
            <td >- </td>
                <td >- ons</td>
                <td >- ez</td>
                <td >- ent</td>
            </tr>
            <tr>
            <td >vends</td>
            <td >vends</td>
            <td >vend</td>
                <td >vendons</td>
                <td >vendez</td>
                <td >vendent</td>
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
            <Card.Subtitle style={{color: 'green' }} >rendre</Card.Subtitle>
            <Card.Text style={{color: 'red' }}>
            to give back, to return
            </Card.Text>
        </Card.Body>
        </Card>
        <Card className="card-style" style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title className="style1" style={{color: 'black' }}>Word of the day</Card.Title>
            <Card.Subtitle style={{color: 'green' }} >répandre</Card.Subtitle>
            <Card.Text style={{color: 'red' }}>
            to spread, to scatter
            </Card.Text>
        </Card.Body>
        </Card>
        <Card className="card-style" style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title className="style1" style={{color: 'black' }}>Word of the day</Card.Title>
            <Card.Subtitle style={{color: 'green' }} >défendre</Card.Subtitle>
            <Card.Text style={{color: 'red' }}>
            Défendre, pronounced "day fon dreh," is a French -re verb that means "to defend, forbid."
            </Card.Text>
        </Card.Body>
        </Card>
        </div>
        </section>
    </Container>
        
        );
    }
}