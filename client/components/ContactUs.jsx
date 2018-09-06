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
GoToGallery(){
  this.props.history.push({pathname:'/gallery'})
}
  render()
  {
    return (
      <div>
        <Grid>
          <Grid.Row>
            
          </Grid.Row>
        </Grid>

      </div>

    );
  }
}
