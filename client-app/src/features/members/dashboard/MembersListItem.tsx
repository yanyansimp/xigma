import React from 'react';
import {
  Item,
  Button,
  Label,
  Segment,
  Icon,
  Table,
  Image,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { IPerson } from '../../../app/models/person';

const MembersListItem: React.FC<{ person: IPerson }> = ({ person }) => {
  return (
    <Table.Row>
      <Table.Cell>{person.controlNumber}</Table.Cell>
      <Table.Cell>
        <Image src={'/assets/user.png'} avatar/>
      </Table.Cell>
      <Table.Cell singleLine>{person.lastName}{', '}{person.firstName}{' '}{person.middleName}</Table.Cell>
      <Table.Cell>{format(person.birthDate!, 'eeee do MMM')}</Table.Cell>
      <Table.Cell>{person.gender}</Table.Cell>
      <Table.Cell>{person.bloodType}</Table.Cell>
      <Table.Cell>{person.address}</Table.Cell>
      <Table.Cell>{person.chapter}</Table.Cell>
      <Table.Cell>{person.dateSurvived}</Table.Cell>
    </Table.Row>
  );
};

export default MembersListItem;
