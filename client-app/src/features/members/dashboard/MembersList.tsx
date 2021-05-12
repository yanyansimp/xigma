import { AnyARecord } from 'dns';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Field } from 'react-final-form';
import { Input, Table, Segment, Image } from 'semantic-ui-react';
import { RootStoreContext } from '../../../app/stores/rootStore';
import MembersListItem from './MembersListItem';

export const MembersList: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const  { personsByName } = rootStore.personStore;

  return (
    <Table selectable striped>
      <Table.Header>
        <Segment basic width={16}>
          <Input action={{ icon: 'search' }} placeholder="Search..." />
        </Segment>
      </Table.Header>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Control No.</Table.HeaderCell>
          <Table.HeaderCell>Image</Table.HeaderCell>
          <Table.HeaderCell>Full Name</Table.HeaderCell>
          <Table.HeaderCell>Birthdate</Table.HeaderCell>
          <Table.HeaderCell>Gender</Table.HeaderCell>
          <Table.HeaderCell>Blood Type</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
          <Table.HeaderCell>Chapter</Table.HeaderCell>
          <Table.HeaderCell>Date Survived</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {personsByName.map(person => 
            <MembersListItem key={person.id} person={person} />
        )}
      </Table.Body>
    </Table>
  );
};

export default observer(MembersList);
