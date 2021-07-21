import { FORM_ERROR } from 'final-form';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import { combineValidators, isRequired } from 'revalidate';
import { Button, Form, Grid, Label, Segment } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';
import DateInput from '../../app/common/form/DateInput';
import ErrorMessage from '../../app/common/form/ErrorMessage';
import SelectInput from '../../app/common/form/SelectInput';
import TextInput from '../../app/common/form/TextInput';
import SignatureUploadWidget from '../../app/common/signatureUpload/SignatureUploadWidget';
import { RootStoreContext } from '../../app/stores/rootStore';
import PhotoUpload from './photoUpload/photo/PhotoUpload';

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
];

// const labelStyle = [
//   {
//     display: 'flex',
//     fontSize: '1.8em',
//     justifyContent: 'center',
//   },
// ];

const validate = combineValidators({
  lastName: isRequired({ message: 'Required field' }),
  firstName: isRequired({ message: 'Required field' }),
  middleName: isRequired({ message: 'Required field' }),
  birthDate: isRequired({ message: 'Required field' }),
  gender: isRequired({ message: 'Required field' }),
  bloodType: isRequired({ message: 'Required field' }),
  address: isRequired({ message: 'Required field' }),
  chapter: isRequired({ message: 'Required field' }),
  schoolName: isRequired({ message: 'Required field' }),
  dateSurvived: isRequired({ message: 'Required field' }),
  contactNumber: isRequired({ message: 'Required field' }),
  contactPerson: isRequired({ message: 'Required field' }),
  // contactPersonNumber: isRequired({ message: 'Required field' }),
  email: isRequired({ message: 'Required field' }),
  password: isRequired({ message: 'Required field' }),
});

const RegistrationForm = () => {
  const rootStore = useContext(RootStoreContext);
  const { register, submitting } = rootStore.userStore;
  const { loadChapters, chapterRegistry} = rootStore.chapterStore;

  const handleFinalFormSubmit = (values: any) => {
    let newUser = {
      ...values,
      id: uuid(),
    };
    register(newUser).catch(error => ({
      [FORM_ERROR]: error
    }));
  };

  useEffect(() => {
    loadChapters();
  }, [loadChapters]);

  return (
    <Grid width={16} style={{ display: 'flex', justifyContent: 'center' }}>
      {/* <Grid.Column width={12}> */}
      {/* <Label color="red" style={labelStyle}> */}
      {/* <h4>MEMBERSHIP REGISTRATION</h4> */}
      {/* </Label> */}
      {/* </Grid.Column> */}

      <Grid.Column width={12}>
        <FinalForm
          onSubmit={handleFinalFormSubmit}
          validate={validate}
          render={({
            handleSubmit,
            submitError,
            dirtySinceLastSubmit,
            invalid,
            pristine,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Label color="red" size="massive">
                MEMBERSHIP REGISTRATION
              </Label>
              <Segment>
                <h3>Personal Information</h3>
                <Form.Group widths="equal">
                  <Field
                    fluid
                    label="Last Name"
                    placeholder="Last Name"
                    name="lastName"
                    component={TextInput}
                  />
                  <Field
                    fluid
                    label="First Name"
                    placeholder="First Name"
                    name="firstName"
                    component={TextInput}
                  />
                  <Field
                    fluid
                    label="Middle Name"
                    placeholder="Middle Name"
                    name="middleName"
                    component={TextInput}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Field
                    date={true}
                    label="Birthdate"
                    placeholder="Date"
                    name="birthDate"
                    component={DateInput}
                  />
                  <Field
                    label="Gender"
                    placeholder="Gender"
                    name="gender"
                    options={genderOptions}
                    component={SelectInput}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Field
                    width={6}
                    label="Bloodtype"
                    placeholder="Bloodtype"
                    name="bloodType"
                    component={TextInput}
                  />
                  <Field
                    width={6}
                    label="Suffix"
                    placeholder="Suffix"
                    name="suffix"
                    component={TextInput}
                  />
                </Form.Group>
                <Field
                  fluid
                  label="Home Address"
                  placeholder="Home Address"
                  name="address"
                  component={TextInput}
                />
                <Form.Group widths="equal">
                  <Field
                    fluid
                    label="Chapter Name"
                    placeholder="Chapter Name"
                    name="chapter"
                    options={chapterRegistry}
                    component={SelectInput}
                  />
                  <Field
                    fluid
                    label="School Name"
                    placeholder="School Name"
                    name="schoolName"
                    component={TextInput}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Field
                    fluid
                    label="Date Survived"
                    placeholder="Date Survived"
                    name="dateSurvived"
                    component={TextInput}
                  />
                  <Field
                    fluid
                    label="Contact Number"
                    placeholder="Contact Number"
                    name="contactNumber"
                    component={TextInput}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Field
                    fluid
                    label="Contact Person"
                    placeholder="Contact Person"
                    name="contactPerson"
                    component={TextInput}
                  />
                  <Field
                    fluid
                    label="Contact Person Number"
                    placeholder="Contact Person Number"
                    name="contactPersonNumber"
                    component={TextInput}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Field
                    fluid
                    label="Email"
                    placeholder="Email"
                    name="email"
                    component={TextInput}
                  />
                  <Field
                    fluid
                    label="Password"
                    placeholder="Password"
                    type="password"
                    name="password"
                    component={TextInput}
                  />
                </Form.Group>
                {submitError && !dirtySinceLastSubmit && (
                  <ErrorMessage error={submitError} />
                )}
              </Segment>
              <Segment>
                <h3>Photo</h3>
                <PhotoUpload />
              </Segment>
              <Segment>
                <h3>Signature</h3>
                <SignatureUploadWidget />
              </Segment>
              <Button
                loading={submitting}
                disabled={(invalid && !dirtySinceLastSubmit) || pristine}
                floated="right"
                positive
                type="submit"
                content="Submit"
                size="big"
              />
              {/* <Button
                //   onClick={
                //     person.id
                //       ? () => history.push('/members') // edit ni
                //       : () => history.push('/members') // edit ni
                //   }
                //   disabled={loading}
                floated="right"
                type="button"
                content="Cancel"
              /> */}
            </Form>
          )}
        />
        {/* </Segment> */}
      </Grid.Column>
    </Grid>
  );
};

export default observer(RegistrationForm);
