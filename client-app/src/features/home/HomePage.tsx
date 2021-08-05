import React, { useContext, Fragment } from 'react';
import {
  Container,
  Segment,
  Header,
  Button,
  Image,
  Grid
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';
import LoginForm from '../user/LoginForm';
import RegisterForm from '../user/RegisterForm';

const HomePage = () => {
  const token = window.localStorage.getItem('jwt');
  const rootStore = useContext(RootStoreContext);
  const { isLoggedIn, user } = rootStore.userStore;
  const {openModal} = rootStore.modalStore;
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/sigmalogoo.png"
            alt="logo"
            style={{ marginBottom: 12, width: '100px', height: '100px' }}
          />
          Sigma Xi
        </Header>
        {isLoggedIn && user ? (
          <Fragment>
            <Header
              as="h2"
              inverted
              content={`Welcome back ${user.displayName}`}
            />
            <Button as={Link} to="/activities" size="huge" inverted>
              Go to activities!
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            <Header as="h2" inverted>
              Welcome to Sigma Xi Portal
            </Header>
            <Button
              onClick={() => openModal(<LoginForm />)}
              size="huge"
              inverted
            >
              Login
            </Button>
            <Button
              // onClick={() => openModal(<RegisterForm />)}
              as={Link}
              to="/registration"
              size="huge"
              inverted
            >
              Register
            </Button>
          </Fragment>
        )}
      </Container>
    </Segment>
  );
};

export default HomePage;
