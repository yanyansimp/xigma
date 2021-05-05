import React from 'react'
import { Table } from 'semantic-ui-react'

const MembersList = () => (
  <Table singleLine>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Member Control No.</Table.HeaderCell>  
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Middle Name</Table.HeaderCell>
        <Table.HeaderCell>Home Address</Table.HeaderCell>
        <Table.HeaderCell>Gender</Table.HeaderCell>
        <Table.HeaderCell>Contact No.</Table.HeaderCell>
        <Table.HeaderCell>Blood Type</Table.HeaderCell>
        <Table.HeaderCell>Date Year Survive</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>XI-2021-0001</Table.Cell>
        <Table.Cell>Dangoy</Table.Cell>
        <Table.Cell>Jitro</Table.Cell>
        <Table.Cell>Beltran</Table.Cell>
        <Table.Cell>SJIT University</Table.Cell>
        <Table.Cell>Male</Table.Cell>
        <Table.Cell>0912688978</Table.Cell>
        <Table.Cell>AB+++</Table.Cell>    
        <Table.Cell>1800's</Table.Cell>
      </Table.Row>
    
    </Table.Body>
  </Table>
)

export default MembersList