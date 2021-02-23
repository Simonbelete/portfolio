import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';


const Gretting = () => {
    return (
        <div className="gretting">
            <Row>
                <Col md={2} />
                <Col xs={5}>
                    <div className="gretting__message">
                        <div className="gretting__message__hello">
                            Hello, I'm
                        </div>
                        <div className="gretting__message__name">
                            ስማኦን
                        </div>
                    </div>
                </Col>
                <Col xs={5}>
                    Image
                </Col>
            </Row>
        </div>
    )
}

export default Gretting;