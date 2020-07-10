import PropTypes from 'prop-types';
import Link from 'next/link';
import withApollo from '../graphql/withApollo';
import { Button } from 'antd';
import Layout from '../components/organisms/Layout/Layout';

const LinkHome = () => (
  <Link href='/'>
    <Button type='primary' ghost>
      Home
    </Button>
  </Link>
);

const Error = (props) => {
  let error;

  switch (props.statusCode) {
    case 404:
      error = 'Page Not Found';
      break;

    case 500:
      error = 'Internal Server Error';
      break;

    case true:
      error = `HTTP ${statusCode} Error`;
      break;

    default:
      error = 'Error';
      break;
  }

  return (
    <Layout title='Error' header={<h1>{error}</h1>} content={<LinkHome />} />
  );
};

Error.getInitialProps = (ctx) => {
  const { res, err } = ctx;

  let statusCode;

  if (res && res.statusCode) statusCode = res.statusCode;
  else if (err && err.statusCode) statusCode = err.statusCode;
  else statusCode = 404;

  return { statusCode };
};

Error.propTypes = { statusCode: PropTypes.number };

export default withApollo({ ssr: false })(React.memo(Error));
