import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';

import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }) => (
  <Page>
    <Component {...pageProps} />
  </Page>
);

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;