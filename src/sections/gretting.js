import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import gihubSvg from '../images/github.svg';
import telegramSvg from '../images/telegram.svg';
import CallIcon from '../components/CallIcon';
import GithubIcon from '../components/GithubIcon';
import LinkIcon from '../components/LinkIcon';
import TelegramIcon from '../components/TelegramIcon';


const Navbar = () => {
    return (
        <div className="navbar">
            <Row>
                <Col md={8} />
                <Col md={4}>
                    <a href="https://github.com/Simonbelete" target="__blank" className="icon">
                        <img src={gihubSvg} />
                    </a>
                    <a href="https://telegram.com/simonbelete" target="__blank" className="icon">
                        <img src={telegramSvg} />
                    </a>
                </Col>
            </Row>
        </div>
    )
}

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

const GrettingHello = () => {
    return (
        <>
            <div className="greet">
                <div className="greet__hello">
                    Hello, I'm
                </div>
                <div className="greet__name">
                    ስምኦን
                </div>
            </div>
        </>   
    )
}

const Gretting = () => {
    return (
        <div className="section gretting" id="section0">
           {/* Navbar */}
           <Row className="navbar">
               <Col xs={0} md={2} />
               {/* Left Nabar */}
               <Col xs={6} md={5}>
                   <LeftNavbar />
               </Col>
               {/* End of Left Navarb */}
               
               {/** Right Nabr */}
               <Col xs={6} md={5}>
                   <RightNavbar />
               </Col>
               {/** End of Right Navbar */}
           </Row>
           {/* End of Navbar */}

           {/** Hero */}
           <Row className="hero">
               <Col md={2} />
               <Col md={4}>
                    <GrettingHello />
               </Col>
           </Row>
           {/** End of Hero */}
        </div>
    )
}

export default Gretting;