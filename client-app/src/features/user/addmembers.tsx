import React from 'react'
import { Form, Input, Label} from 'semantic-ui-react'

const options =[
    {key: 'm', text: 'Male', value: 'male'},
    {key: 'f', text: 'Female', value: 'female'},
    {key: 'o', text: 'Other', value: 'other'},
]

const Addmembers = () => (
    
  <Form>
    <Label style={{marginLeft:'6.5em'}} size='huge'>MEMBERSHIP REGISTRATION </Label> 
    <Form.Group style={{marginTop: '2em'}} widths='equal'>
      <Form.Field style={{marginBottom: '0.5em'}}>
        Last Name
        <Input style={{marginBottom: '0.5em' , marginTop: '0.5em'}} placeholder='Last Name'  />
        First Name
        <Input style={{marginBottom: '0.5em' , marginTop: '0.5em'}} placeholder='First Name'  />
        Middle Name
        <Input style={{marginBottom: '0.5em', marginTop: '0.5em'}} placeholder='Middle Name'  />
        Home Address
        <Input style={{marginBottom: '0.5em', marginTop: '0.5em' }} placeholder='Home Address'/>
      </Form.Field>
    </Form.Group>
    <Form.Group widths='equal'>
        <Form.Input fluid label='Blood Type' placeholder='Blood Type'/>
        <Form.Input fluid label='Contact Number' placeholder='Contact Number'/>
        <Form.Select 
        fluid
        label='Gender'
        options={options}
        placeholder='Gender'/>
    </Form.Group>

    
    <Form.Group widths='equal'>
            Chapter Name
            <Input style={{marginBottom: '0.5em'}} placeholder='Chapter Name'/>
            School Name
            <Input style={{marginBottom: '0.5em'}} placeholder='School Name'/>
    </Form.Group>
    
    <Form.Group style={{marginTop: '0.5em'}}>
    <Form.Input fluid label='Date Year Survive' placeholder='Date Survive'/>
        <Form.Input fluid label='Member Control No.' placeholder='Member Control No.'/>
    </Form.Group>
    <Form.Group widths='equal' style={{marginBottom: '0.5em'}}>
            Regional Grand Chancellor Name
            <Input style={{marginBottom: '0.5em' , marginTop: '0.5em'}} placeholder='Regional Grand Chancellor Name'/>
            Grand Chancellor Name
            <Input style={{marginTop: '0.5em'}} placeholder='Grand Chancellor Name'/>
    </Form.Group>

    <Form.Group center style={{ marginTop:'2em', marginLeft: '15em', }}>
    <Form.Button control='button'> Submit</Form.Button>
    <Form.Button control='button'> Cancel</Form.Button>
    </Form.Group>
  </Form>
  
)

export default Addmembers;
