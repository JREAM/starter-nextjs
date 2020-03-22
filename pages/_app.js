import {PageTransition} from 'next-page-transitions';
import Router from 'next/router';
import React from 'react';
import * as gtag from '../lib/gtag';
// Main Style Sheet
import '../styles/app.scss';


Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

const TIMEOUT = 100;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <PageTransition
        timeout={TIMEOUT}
        classNames="page-transition"
        loadingDelay={500}
        loadingTimeout={{
          enter: TIMEOUT,
          exit: 0,
        }}
        loadingClassNames="loading-indicator"
      >
        {/* Loaded Component (Page) */}
        <Component {...pageProps} />
      </PageTransition>
    </>
  );
};

export default App;
