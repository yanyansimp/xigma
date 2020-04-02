import React from 'react';
import { Container, Segment, Header, Button, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          {/* <Image
            size="massive"
            src="/assets/logo.png"
            alt="logo"
            style={{ marginBottom: 12, width: "30px"}}
          /> */}
          Kiri
        </Header>
        <Header as="h2" inverted content="Welcome Pregiato Trading" />
        <Button as={Link} to="/activities" size="huge" inverted>
          Take me to the calendar!
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
