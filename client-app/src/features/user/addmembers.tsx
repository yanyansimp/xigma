import React from 'react'
import { Form, Input, Label, Button} from 'semantic-ui-react'

const options =[
    {key: 'm', text: 'Male', value: 'male'},
    {key: 'f', text: 'Female', value: 'female'},
    {key: 'o', text: 'Other', value: 'other'},
]

const options1 =[
  {key: 'a', text: 'A+', value: 'a+'},
  {key: 'aa', text: 'A-', value: 'a+'},
  {key: 'b', text: 'B+', value: 'b+'},
  {key: 'bb', text: 'B-', value: 'b-'},
  {key: 'oo', text: 'O+', value: 'o+'},
  {key: 'ooo', text: 'O-', value: 'o-'},
  {key: 'ab', text: 'AB+', value: 'ab+'},
  {key: 'aabb', text: 'AB-', value: 'ab-'},

]


const Addmembers = () => (
  <div className="Memform1">
  
  <Form>
  
    <Label color='red' style={{marginLeft:'15em', fontSize:'1.8em', marginTop:'1em', marginBottom:'1.5em'}}>MEMBERSHIP REGISTRATION </Label> 
      <Form.Group widths='equal'style={{marginLeft:'0.5em',marginRight:'0.5em'}}>
        {/* <Form.Field style={{marginBottom: '0.5em' }}> */}
        <Form.Input fluid label='Last Name' placeholder='Last Name'/>
        <Form.Input fluid label='First Name' placeholder='First Name'/>
        <Form.Input fluid label='Middle Name' placeholder='Middle Name'/>
        {/* </Form.Field> */}
      </Form.Group>
    <Form.Group style={{marginTop: '2em', marginLeft:'0.5em', marginRight:'0.5em'}} widths='equal'>
    <Form.Input fluid label='Home Address' placeholder='Home Address'/>
      <Form.Input fluid label='Member Control No.' placeholder='Member Control No.'/>
    </Form.Group>

    <Form.Group widths='equal'style={{marginLeft:'0.5em',marginRight:'0.5em'}}>
        {/* <Form.Input fluid label='Blood Type' placeholder='Blood Type'/> */}
        <Form.Select 
        fluid
        label='Blood Type:'
        options={options1}
        placeholder='Blood Type'/>
        <Form.Input fluid label='Contact Number' placeholder='Contact Number'/>
        <Form.Select 
        fluid
        label='Gender'
        options={options}
        placeholder='Gender'/>
        <Form.Input fluid label='Date Year Survive' placeholder='School Name'/>
    </Form.Group>

    <Form.Group widths='equal'style={{marginLeft:'0.5em',marginRight:'0.5em'}}>
        <Form.Input fluid label='Chapter Name' placeholder='Chapter Name'/>
        <Form.Input fluid label='School Name' placeholder='School Name'/>
    </Form.Group>

    <Form.Group widths='equal'style={{marginLeft:'0.5em',marginRight:'0.5em'}}>
        <Form.Input fluid label='Regional Grand Chancellor Name' placeholder='Regional Grand Chancellor Name'/>
        <Form.Input fluid label='Grand Chancellor Name' placeholder='Grand Chancellor Name'/>
    </Form.Group>
   
    <Form.Group center style={{ marginTop:'2em', marginLeft: '30em' }}>
    <Form.Field style={{marginBottom: '2em' }}>
       
    <Button style={{width:'10em'}}
            color="orange"
            content="Submit"
            fluid
          />
    </Form.Field>
    <Form.Field>
    <Button style={{width:'10em'}}
            color="grey"
            content="Cancel"
            fluid
          />
    </Form.Field>
    </Form.Group>

    
  </Form>
  
  </div>
)

export default Addmembers;
