import React from 'react';
import {Menu, Grid, Image, Button} from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class HomeContent extends React.Component
{
  constructor(prop)
  {
    super();
    this.state = {

    };
  }
  render()
  {
    return (
      <div style={{marginTop:'2%',backgroundColor:'#1F1F1F',color:'white',textAlign:'center'}}>
        <Grid>
          <Grid.Row/>
          <Grid.Row>
            <Grid.Column width={16}>
              Contact us <br/>
              Mobile: +91 1234567890<br/>
              Mail Id: gatefinearts@gmail.com
            </Grid.Column>
          </Grid.Row>
          <Grid.Row/>

        </Grid>

      </div>
    );
  }
}
