import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import CallIcon from '../components/CallIcon';
import GithubIcon from '../components/GithubIcon';
import LinkIcon from '../components/LinkIcon';
import TelegramIcon from '../components/TelegramIcon';

const LeftNavbar = () => {
    return (
        <>
            <div className="phonenumber icon">
                <CallIcon color='#ffff' />
                <a>+251966751230</a>
            </div>
        </>
    )
}

const RightNavbar = () => {
    return (
        <>
            <a href="https://github.com/Simonbelete" target="__blank" className="icon">
                <GithubIcon color='#fff' />
                <span>Github</span>
                <LinkIcon color="#fff" size="12px"/>
            </a>
            <a href="https://telegram.com/simon_belete" target="__blank" className="icon">
                <TelegramIcon color='#fff' />
                <span>Telegram</span>
                <LinkIcon color="#fff" size="12px"/>
            </a>
        </>
    )
}

const Navbar = () => {
    return (
        <Row className="navbar">
            <Col xs={0} md={2} />
            {/* Left Nabar */}
            <Col xs={6} md={6}>
                <LeftNavbar />
            </Col>
            {/* End of Left Navarb */}
            
            {/** Right Nabr */}
            <Col xs={6} md={4}>
                <RightNavbar />
            </Col>
            {/** End of Right Navbar */}
        </Row>
    )
}

export default Navbar;