import { AnyARecord } from 'dns';
import { values } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import { Input, Table, Segment, Image, Button, Icon, Label } from 'semantic-ui-react';
import { RootStoreContext } from '../../../app/stores/rootStore';
import MembersListItemPlaceHolder from './MemberListItemPlaceHolder';
import MembersListItem from './MembersListItem';

export const MembersList: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const  { personsByName, loadingInitial, setPredicate } = rootStore.personStore;
  let [value] = useState('');

  return (
    <Table selectable striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="10">
            <Button
              floated="right"
              icon
              labelPosition="left"
              primary
              size="small"
              as={Link}
              to="/addMembers"
            >
              <Icon name="user" /> Add Member
            </Button>
            <Input
              action={{
                icon: 'search',
                onClick: (e: any) => setPredicate('keyWord', value),
              }}
              placeholder="Search..."
              onChange={(e, data) => {
                value = data.value;
              }}
            />
          </Table.HeaderCell>
        </Table.Row>
        <Table.Row> 
          <Table.HeaderCell>Control No.</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Birthdate</Table.HeaderCell>
          <Table.HeaderCell>Gender</Table.HeaderCell>
          <Table.HeaderCell>Blood Type</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
          <Table.HeaderCell>Chapter</Table.HeaderCell>
          <Table.HeaderCell>Date Survived</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        { loadingInitial ? ( <MembersListItemPlaceHolder /> ) : 
          ( personsByName.map((person) => 
              <MembersListItem key={person.id} person={person} /> ))
        }
      </Table.Body>
    </Table>
  );
};

export default observer(MembersList);
