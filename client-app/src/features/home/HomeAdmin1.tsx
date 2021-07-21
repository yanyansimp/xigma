import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const HomeAdmin1 = () => {
  return (
    <Container>
      <Header style={{ marginLeft: '18em' }}>
        <h1>XIANS SIGMA XI FRATERNITY & SORORITY</h1>
      </Header>
      <img
        src="/assets/sigmalogoo.png"
        alt="logo"
        style={{
          marginTop: '15px',
          marginLeft: '25em',
          marginRight: '5px',
          height: '500px',
          width: '500px',
        }}
      />
    </Container>
  );
};

export default HomeAdmin1;
