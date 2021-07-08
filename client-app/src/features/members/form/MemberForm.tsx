import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Form, Grid, Segment, Label, Button } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';
import { PersonFormValues } from '../../../app/models/person';
import { RootStoreContext } from '../../../app/stores/rootStore';
import { Form as FinalForm, Field } from 'react-final-form';
import { observer } from 'mobx-react-lite';
import TextInput from '../../../app/common/form/TextInput';
import TextAreaInput from '../../../app/common/form/TextAreaInput';
import SelectInput from '../../../app/common/form/SelectInput';
import {
  combineValidators,
  isRequired,
  composeValidators,
  hasLengthGreaterThan,
} from 'revalidate';
import DateInput from '../../../app/common/form/DateInput';

interface DetailParams {
    id: string;
}

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
];

const validate = combineValidators({
  lastName: isRequired({ message: 'Required field' }),
  firstName: isRequired({ message: 'Required field' }),
  middleName: isRequired({ message: 'Required field' }),
  birthDate: isRequired({ message: 'Required field' }),
  gender: isRequired({ message: 'Required field' }),
  bloodType: isRequired({ message: 'Required field' }),
  address: isRequired({ message: 'Required field' }),
  controlNumber: isRequired({ message: 'Required field' }),
  chapter: isRequired({ message: 'Required field' }),
  schoolName: isRequired({ message: 'Required field' }),
  dateSurvived: isRequired({ message: 'Required field' }),
  contactNumber: isRequired({ message: 'Required field' }),
  contactPerson: isRequired({ message: 'Required field' }),
  regionalChansellor: isRequired({ message: 'Required field' }),
  grandChansellor: isRequired({ message: 'Required field' }),
});

const MemberForm: React.FC<RouteComponentProps<DetailParams>> = 
({
    match,
    history
}) => {
    const rootStore = useContext(RootStoreContext);
    const {
        createPerson,
        editPerson,
        submitting,
        loadPerson
    } = rootStore.personStore;

    const [person, setPerson] = useState(new PersonFormValues())
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (match.params.id) {
            setLoading(true);
            loadPerson(match.params.id)
                .then(person => setPerson(new PersonFormValues(person)))
                .finally(() => setLoading(false));
        }
    }, [loadPerson, match.params.id]);

    const handleFinalFormSubmit = (values: any) => {
      const { birthDate, ...person } = values;
      person.birthDate = birthDate;
        if (!person.id) {
            let newPerson = {
                ...person,
                id: uuid()
            };
            createPerson(newPerson);
        } else {
            editPerson(person);
        }
    };

    return (
      <Grid>
        <Grid.Column width={12} style={{ padding: '2em 0 0 5em' }}>
          <Segment clearing>
            <FinalForm
              validate={validate}
              initialValues={person}
              onSubmit={handleFinalFormSubmit}
              render={({ handleSubmit, invalid, pristine }) => (
                <Form onSubmit={handleSubmit} loading={loading}>
                  <Label
                    fluid
                    color="red"
                    style={{
                      marginLeft: '8em',
                      fontSize: '1.8em',
                      marginTop: '1em',
                      marginBottom: '1.5em',
                    }}
                  >
                    MEMBERSHIP REGISTRATION
                  </Label>
                  <Form.Group widths="equal">
                    <Field
                      fluid
                      label="Last Name"
                      placeholder="Last Name"
                      name="lastName"
                      value={person.lastName}
                      component={TextInput}
                    />
                    <Field
                      fluid
                      label="First Name"
                      placeholder="First Name"
                      name="firstName"
                      value={person.firstName}
                      component={TextInput}
                    />
                    <Field
                      fluid
                      label="Middle Name"
                      placeholder="Middle Name"
                      name="middleName"
                      value={person.middleName}
                      component={TextInput}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Field
                      width={8}
                      date={true}
                      label="Birthdate"
                      placeholder="Date"
                      name="birthDate"
                      value={person.birthDate}
                      component={DateInput}
                    />
                    <Field
                      width={6}
                      label="Gender"
                      placeholder="Gender"
                      name="gender"
                      options={genderOptions}
                      component={SelectInput}
                    />
                    <Field
                      width={6}
                      label="Bloodtype"
                      placeholder="Bloodtype"
                      name="bloodType"
                      value={person.bloodType}
                      component={TextInput}
                    />
                    <Field
                      width={6}
                      label="Suffix"
                      placeholder="Suffix"
                      name="suffix"
                      value={person.suffix}
                      component={TextInput}
                    />
                  </Form.Group>
                  <Field
                    fluid
                    label="Home Address"
                    placeholder="Home Address"
                    name="address"
                    value={person.address}
                    component={TextAreaInput}
                  />
                  <Form.Group widths="equal">
                    <Field
                      width={6}
                      label="Control Number"
                      placeholder="Control Number"
                      name="controlNumber"
                      value={person.controlNumber}
                      component={TextInput}
                    />
                    <Field
                      fluid
                      label="Chapter Name"
                      placeholder="Chapter Name"
                      name="chapter"
                      value={person.chapter}
                      component={TextInput}
                    />
                    <Field
                      fluid
                      label="School Name"
                      placeholder="School Name"
                      name="schoolName"
                      value={person.schoolName}
                      component={TextInput}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Field
                      fluid
                      label="Date Survived"
                      placeholder="Date Survived"
                      name="dateSurvived"
                      value={person.dateSurvived}
                      component={TextInput}
                    />
                    <Field
                      fluid
                      label="Contact Number"
                      placeholder="Contact Number"
                      name="contactNumber"
                      value={person.contactNumber}
                      component={TextInput}
                    />
                    <Field
                      fluid
                      label="Contact Person"
                      placeholder="Contact Person"
                      name="contactPerson"
                      value={person.contactPerson}
                      component={TextInput}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Field
                      fluid
                      label="Regional Chancellor Name"
                      placeholder="Regional Chancellor Name"
                      name="regionalChansellor"
                      value={person.regionalChansellor}
                      component={TextInput}
                    />
                    <Field
                      fluid
                      label="Grand Chancellor Name"
                      placeholder="Grand Chancellor Name"
                      name="grandChansellor"
                      value={person.grandChansellor}
                      component={TextInput}
                    />
                  </Form.Group>
                  <Button
                    loading={submitting}
                    disabled={loading || invalid || pristine}
                    floated="right"
                    positive
                    type="submit"
                    content="Submit"
                  />
                  <Button
                    onClick={
                      person.id
                        ? () => history.push('/members') // edit ni
                        : () => history.push('/members') // edit ni
                    }
                    disabled={loading}
                    floated="right"
                    type="button"
                    content="Cancel"
                  />
                </Form>
              )}
            />
          </Segment>
        </Grid.Column>
      </Grid>
    );
}

export default observer(MemberForm);
