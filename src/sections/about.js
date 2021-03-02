import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const About = () => {
    return (
        <div className="section about">
            <Row className="about__body">
                <Col md={3} />
                <Col md={8}>
                    <h1 className="about__body__title">
                        About Me
                    </h1>
                    <div className="about__body__description">
                        I'am a Fullstack plus Mobile App developer.
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default About;