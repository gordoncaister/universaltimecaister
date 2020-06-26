import React, { useState, useEffect } from 'react';
import TimePicker from 'react-time-picker'; 

import './App.css';
import moment from 'moment';
import {
  Card, CardImg, Jumbotron, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, CardText
} from 'reactstrap';
let convertedTime = moment(new Date()).zone("+02:00").format("LTS")
function App() {

  const [date, setDate] = useState(new Date())
  const [dropdownLocationOpen, setDropdownLocationOpen] = useState(false);
  const [selectTime, setSelectTime] = useState(date);
  const [country, setCountry] = useState("South Africa")

  const toggleLocation = () => setDropdownLocationOpen(prevState => !prevState);

  const updateCountry = (value) => {
    setCountry(value)
  }

  const updateSelectTime = (value) => {
    console.log(value)
    setSelectTime(value)
  }



  useEffect(()=> {
    setInterval(() => setDate(new Date()),1000)
    if(country === "USA"){
      convertedTime = moment(selectTime,"hh:mm:ss").zone("-05:00").format("LTS")
    }
    if(country === "UK"){
      convertedTime = moment(selectTime,"hh:mm:ss").zone("+01:00").format("LTS")
    }
    if(country === "SA"){
      convertedTime = moment(selectTime,"hh:mm:ss").zone("+02:00").format("LTS")
    }
  },[country, selectTime])

  return (
    <div className="App">
      <Jumbotron fluid>
        <Container xs="1" sm="3" md="3" lg="3">
          <h1 className="display-3">Universal Time Caister (UTC)</h1>
          <p className="lead">To keep some people on time, this website was created.</p>
        </Container>
      </Jumbotron>
      <Container>
        <Row xs="1" sm="3" md="3" lg="3">
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
      <Container xs="1" sm="1" md="1" lg="1">
        <Card>
          <CardBody>
            <CardTitle>What time is it in? </CardTitle>
            <Dropdown isOpen={dropdownLocationOpen} toggle={toggleLocation}>
              <DropdownToggle caret>
                {country}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => updateCountry("UK")}>UK</DropdownItem>
                <DropdownItem onClick={() => updateCountry("USA")}>Murica</DropdownItem>
                <DropdownItem onClick={() => updateCountry("SA")}>South Africa</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <br/>
            <CardSubtitle>When it is <TimePicker
              amPmAriaLabel="Select AM/PM"
              clearAriaLabel="Clear value"
              hourAriaLabel="Hour"
              maxDetail="second"
              minuteAriaLabel="Minute"
              nativeInputAriaLabel="Time"
              onChange={updateSelectTime}
              secondAriaLabel="Second"
              value={selectTime}
              disableClock="true"
            />?</CardSubtitle>
            <CardText>It is: <strong>{convertedTime}</strong> in {country}</CardText>
            <CardText>
              
            </CardText>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default App;
