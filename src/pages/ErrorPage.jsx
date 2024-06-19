/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
