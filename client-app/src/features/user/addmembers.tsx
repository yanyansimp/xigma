import React from 'react'
import { Form, Input, Label} from 'semantic-ui-react'

const options =[
    {key: 'm', text: 'Male', value: 'male'},
    {key: 'f', text: 'Female', value: 'female'},
    {key: 'o', text: 'Other', value: 'other'},
]

const Addmembers = () => (
  <div className="Memform1">
  
  <Form>
  <div className="label1">
    <label style={{marginLeft:'6.5em', fontSize:'1.8em', marginTop:'0.8em'}}>MEMBERSHIP REGISTRATION </label> 
  </div>
    <Form.Group style={{marginTop: '2em', marginLeft:'0.5em', marginRight:'0.5em'}} widths='equal'>
      <Form.Field style={{marginBottom: '0.5em' }}>
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
    <Form.Group widths='equal'style={{marginLeft:'0.5em',marginRight:'0.5em'}}>
        <Form.Input fluid label='Blood Type' placeholder='Blood Type'/>
        <Form.Input fluid label='Contact Number' placeholder='Contact Number'/>
        <Form.Select 
        fluid
        label='Gender'
        options={options}
        placeholder='Gender'/>
    </Form.Group>

    
    <Form.Group widths='equal' style={{marginLeft:'0.5em',marginRight:'0.5em'}}>
            Chapter Name
            <Input style={{marginBottom: '0.5em', width:'43.5em', marginLeft:'0.5em'}} placeholder='Chapter Name'/>
          </Form.Group>
    <Form.Group  style={{marginLeft:'0.5em',marginRight:'0.5em', }}>
            School Name
            <Input style={{marginBottom: '0.5em', width:'43.5em', marginLeft:'1em'}} placeholder='School Name'/>
    </Form.Group>
    
    <Form.Group style={{marginTop: '0.5em' , marginLeft:'0.5em',marginRight:'0.5em'}}>
      Date Year Survive
      <Input style={{marginBottom: '0.5em', width:'15em', marginLeft:'0.5em', marginRight:'0.7em'}} placeholder='Date Survive'/>
      Member Control No.
      <Input style={{marginBottom: '0.5em', width:'16.5em', marginLeft:'0.5em', marginRight:'0.5em'}} placeholder='Member Control No.'/>
    
    </Form.Group>
    <Form.Group style={{marginBottom: '0.5em', marginLeft:'0.5em'}}>
            Regional Grand Chancellor Name
            <Input style={{marginBottom: '0.5em', width:'35em', marginRight:'0.5em', marginLeft:'0.5em'}} placeholder='Regional Grand Chancellor Name'/>
    </Form.Group>
    <Form.Group style={{marginBottom: '0.5em', marginLeft:'0.5em'}}>
            Grand Chancellor Name
            <Input style={{marginLeft: '0.5em', marginRight:'0.5em', width:'40em'}} placeholder='Grand Chancellor Name'/>
    </Form.Group>

    <Form.Group center style={{ marginTop:'2em', marginLeft: '20em' }}>
    <Form.Button control='button'> Submit</Form.Button>
    <Form.Button control='button'> Cancel</Form.Button>
    </Form.Group>
    
  </Form>
  
  </div>
)

export default Addmembers;
