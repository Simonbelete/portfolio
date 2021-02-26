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
            <GrettingSection />

            <ProjectSlide />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;