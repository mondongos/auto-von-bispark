import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

export default class Humidity extends React.Component {
    render() {
        return (
            <Container className="humidity-container">
                <Row>
                    <Col xs={6}>
                        <Image src="/Users/maxwellvanaken/Projects/gangs-of-seaton-plant-machine/public/drop-silhouette.png" thumbnail/>
                    </Col>
                    <Col className="humidity-level" xs={6}>
                        {this.props.humidityLevel}
                    </Col>
                </Row>
            </Container>
        )
    }
}