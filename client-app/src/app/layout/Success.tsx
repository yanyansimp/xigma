import React from 'react';
import { Segment, Header, Icon } from 'semantic-ui-react';

const Success = () => {
  return (
    <Segment basic placeholder>
      <Header icon>
        <Icon name="check" size="large" />
        <h2>
          Success! Please wait within a week to confirm your user account.
        </h2>
      </Header>
    </Segment>
  );
};

export default Success;
