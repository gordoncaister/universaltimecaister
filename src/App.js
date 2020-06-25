import React, { useState, useEffect } from 'react';


import './App.css';
import moment from 'moment';
import {
  Card, CardImg, Jumbotron, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap';

function App() {

  let [date, setDate] = useState(new Date())

  const updateDate = () => {
    setDate(new Date())
  }

  useEffect(()=> {
    setInterval(updateDate(),1000)
  })

  return (
    <div className="App">
      <Jumbotron fluid>
        <Container xs="1" sm="3" md="3" lg="3">
          <h1 className="display-3">Universal Time Caister (UTC)</h1>
          <p className="lead">To keep some people on time, this website was created.</p>
        </Container>
      </Jumbotron>
      <Container>
        <Row Row xs="1" sm="3" md="3" lg="3">
          <Col>
            <Card>
              <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1200px-Flag_of_South_Africa.svg.png" alt="Flag of South Africa.svg"/>
              <CardBody>
                <CardTitle>The time in the South Africa is: </CardTitle>
                <CardSubtitle>{moment(date).zone("+02:00").format("LTS")}</CardSubtitle>
              </CardBody>       
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png" alt="Flag of the United States .svg" />
              <CardBody>
                <CardTitle>The time in the Benji Land is: </CardTitle>
                <CardSubtitle>{moment(date).zone("-05:00").format("LTS")}</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/2560px-Flag_of_the_United_Kingdom.svg.png"/>
              <CardBody>
                <CardTitle>The time in the UK is: </CardTitle>
                <CardSubtitle>{moment(date).zone("+01:00").format("LTS")}</CardSubtitle>
              </CardBody>       
            </Card>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
