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
        <Image avatar src={'/assets/user.png'} />
      </Table.Cell>
      <Table.Cell singleLine>
        {person.lastName}
        {', '}
        {person.firstName} {person.middleName.charAt(0)}
        {'.  '}
        {person.suffix}
      </Table.Cell>
      <Table.Cell>{format(person.birthDate!, 'MMM d, YYYY')}</Table.Cell>
      <Table.Cell>{person.gender}</Table.Cell>
      <Table.Cell>{person.bloodType}</Table.Cell>
      <Table.Cell>{person.address}</Table.Cell>
      <Table.Cell>{person.chapter}</Table.Cell>
      <Table.Cell>{person.dateSurvived}</Table.Cell>
      <Table.Cell>
        <Button as={Link} to={`/editMembers/${person.id}`}>
          View
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default MembersListItem;
