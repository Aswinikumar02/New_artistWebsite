import React from 'react';
import {Menu, Grid, Image, Button, Form, Input, Checkbox} from 'semantic-ui-react';
import { Link } from "react-router-dom";
import AppBar from './Appbar.jsx';
import Request from 'superagent';

export default class HomeContent extends React.Component
{
  constructor(prop)
  {
    super();
    this.state = {

    };
  }
  handleSubmit(){
    console.log('to check for submitted value',this.refs.description.value);
    Request.post('http://localhost:8082/requestSubmission')
      .query({firstName:this.refs.firstName.value,lastName:this.refs.lastName.value,email:this.refs.requestemail.value,contact:this.refs.requestcontact.value,description:this.refs.description.value})
      .end((err, res)=>{
        if (err) {
            console.log('Error from fetching contact details data - > ',err);
          } else {

          }
      })
  }
  render()
  {
    return (
      <div>
        <AppBar/>
        <Grid>
          <Grid.Row/>
          <Grid.Row/>
          <Grid.Row>
            <Grid.Column width={4}/>
            <Grid.Column width={8} style={{textAlign:'center',fontFamily: 'Comfortaa, cursive',fontWeight:'bold',fontSize:'18px'}}>
              GET IN TOUCH
            </Grid.Column>
            <Grid.Column width={4}/>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}/>
            <Grid.Column width={8}>
              <Form>
                    <Form.Field>
                      <label>First Name</label>
                      <input placeholder='First Name' ref='firstName'/>
                    </Form.Field>
                    <Form.Field>
                      <label>Last Name</label>
                      <input placeholder='Last Name' ref='lastName'/>
                    </Form.Field>
                    <Form.Field>
                      <label>E-Mail Id</label>
                      <input placeholder='E-Mail Id' ref='requestemail'/>
                    </Form.Field>
                    <Form.Field>
                      <label>Contact No</label>
                      <input placeholder='Contact No' ref='requestcontact'/>
                    </Form.Field>
                    <Form.Field>
                      <label>Description</label>
                      <textarea placeholder='Description' ref='description'/>
                    </Form.Field>
                    <Form.Field>
                      <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
                  </Form>
            </Grid.Column>
            <Grid.Column width={4}/>
          </Grid.Row>
        </Grid>

      </div>

    );
  }
}
