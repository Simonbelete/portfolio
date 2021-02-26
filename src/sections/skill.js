import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ProgressBar from '../components/ProgressBar';
import PythonLogo from '../components/PythonLogo';
import JavascriptLogo from '../components/JavascriptLogo';

const Skill = () => {
    return (
        <div className="section skill">
            <div className="title">
                <h1>MY SKILLS</h1>
            </div>
            <Row className="skill__field">
                <Col md={2} />
                <Col md={5}>

                   <div className="skill_name">
                       <PythonLogo color="#fff" />
                       &nbsp;&nbsp;Python
                    </div>
                   <ProgressBar perecent={70} />

                    <br /><br />

                   <div className="skill_name">
                       <JavascriptLogo color="#fff" />
                       &nbsp;&nbsp;Javascript
                    </div>
                    <ProgressBar perecent={80} />

                </Col>
                <Col md={5}>

                   <div className="skill_name">
                       <PythonLogo color="#fff" />
                       &nbsp;&nbsp;Python
                    </div>
                   <ProgressBar perecent={80} />

                    <br /><br />

                   <div className="skill_name">
                       <PythonLogo color="#fff" />
                       &nbsp;&nbsp;Python
                    </div>
                    <ProgressBar perecent={80} />

                </Col>
            </Row>
        </div>
    )
}

export default Skill;