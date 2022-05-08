import PropTypes from 'prop-types';
import Header from './Header';

const Page = ({ children = '' }) => (
  <>
    <Header />
    <h1>Page component</h1>
    {children}
  </>
);

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
  