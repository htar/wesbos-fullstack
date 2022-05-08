import PropTypes from 'prop-types';
import Page from './Page';

const MyApp = ({ Component, pageProps }) => (
  <Page>
    <Component {...pageProps} />
  </Page>
);

MyApp.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.any,
};

export default MyApp;
