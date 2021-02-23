import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import GrettingSection from '../sections/gretting';
import ProjectSlide from '../sections/project';

import '../styles/index.css';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    navigation = {true}
    slidesNavigation = {true}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div id="fullpage">

<div class="section " id="section0">
  <div class="intro">
    <img src="imgs/1.png"  alt="1"/>
    <h1>Sliders navigation dots</h1>
    <p>Create a navigation for your landscape sliders</p>
  </div>
</div>
<div class="section" id="section1">
    <div class="slide" id="slide1" data-anchor="slide1">
    <div class="intro">
      <h1>Clickable</h1>
      <p>
        You can even click on the navigation and jump directly to another section.
      </p>
    </div>
  </div>

    <div class="slide" id="slide2" data-anchor="slide2">
    <h1>Slide 2</h1>
  </div>

  <div class="slide" id="slide3" data-anchor="slide3">
    <h1>Slide 3</h1>
  </div>	<div class="slide" id="slide3" data-anchor="slide3">
    <h1>Slide 4</h1>
  </div>
  <div class="slide" id="slide3" data-anchor="slide3">
    <h1>Slide 5</h1>
  </div>
</div>
<div class="section" id="section2">
  <div class="intro">
    <h1>Enjoy it</h1>
  </div>
</div>
</div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;