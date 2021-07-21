import React from 'react';
import { Table, Image, Placeholder } from 'semantic-ui-react';

const MembersListItemPlaceHolder = () => {
  return (
    <Table.Row>
      <Table.Cell>
        <Placeholder>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder>
      </Table.Cell>
      <Table.Cell singleLine>
        <Image avatar src={'/assets/user.png'} />
      </Table.Cell>
      <Table.Cell>
        <Placeholder>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder>
      </Table.Cell>
      <Table.Cell>
        <Placeholder>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder>
      </Table.Cell>
      <Table.Cell>
        <Placeholder>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder>
      </Table.Cell>
      <Table.Cell>
        <Placeholder>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder>
      </Table.Cell>
      <Table.Cell>
        <Placeholder>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder>
      </Table.Cell>
      <Table.Cell>
        <Placeholder>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder>
      </Table.Cell>
    </Table.Row>
  );
};

export default MembersListItemPlaceHolder;
