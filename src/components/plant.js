import React from 'react'
import Humidity from './children/humidity'
import SoilPH from './children/soilph'
import {Container, Row, Col, Image} from 'react-bootstrap'


export default class Plant extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={5}>
                        <Humidity 
                        humidityLevel="95%"
                        />
                    </Col>
                    <Col xs={7}>

                    </Col>
                </Row>
                <Row>
                    <Col xs={5}>
                        <SoilPH
                        soilPH="7 ph"/>
                    </Col>
                    <Col xs={7}>
                        
                    </Col>
                </Row>
               
                
            </Container>
        )
    }
}