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
  const rootStore = useContext(RootStoreContext);
  const { isLoggedIn, user } = rootStore.userStore;
  const {openModal} = rootStore.modalStore;
  return (
    
    <Segment inverted textAlign="center" vertical className="masthead">
      <div></div>
      <Container text>
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
          <body className="log2" color="yellow">
          <Fragment>
            
             <Header as="h2" inverted content="" />
            <Image class="ui mini image"
            src="/assets/sigmalogoo.png"
            alt="logo"
            centered
            style={{ marginBottom: 12, width: "200px",}}
          />
            <Button onClick={() => openModal(<LoginForm />)} size="huge" inverted>
              Login
            </Button>
            {/* <Button onClick={() => openModal(<RegisterForm />)} size="huge" inverted
            style={{backgroundcolor: <div id="fffff"></div>,}}
            >
              Register
            </Button> */}
            
          </Fragment>
          </body>
        )}
      </Container>
    </Segment>
  );
};

export default HomePage;
