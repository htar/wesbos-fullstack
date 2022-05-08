import PropTypes from 'prop-types';

const Page = ({ children = '' }) => (
  <>
    <h1>Page component</h1>
    {children}
  </>
);

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
