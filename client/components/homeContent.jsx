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
          <Grid.Row/>
          <Grid.Row/>
          <Grid.Row>
            <Grid.Column width={5}/>
            <Grid.Column width={6}>
              <p style={{textAlign:'center',fontFamily: 'Comfortaa, cursive',fontWeight:'bold',fontSize:'22px'}}>
                Create home with design and colour
              </p>
            </Grid.Column>
            <Grid.Column width={5}/>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}/>
            <Grid.Column width={10}>
              <p style={{fontFamily: 'Comfortaa, cursive',fontSize:'16px',fontWeight:'10',color:'#8B8B8B',wordSpacing:'3px',textAlign:'center'}}>We represent gate fine arts and have associated our services towards fine arts and sculptures for the past 12 years. We specialize in home decorator, wall murals, 2d and 3d modelling, art works, metal and fiber relief work. We started this enriching journey towards a common goal of making the company with multi-dimensional profile to cater to all kinds of services in the fine arts, designing and graphics. We take a fresh approach to market trends and work closely with architects and interior designers to suit their specific needs.</p>
            </Grid.Column>
            <Grid.Column width={3}/>
          </Grid.Row>
          <Grid.Row/>
          <Grid.Row>
            <Grid.Column width={2}/>
            <Grid.Column width={6}>
              <Image src='http://cyleyoung.com/wp-content/uploads/2017/10/636216642862373135-878299960_art.jpg'/>
            </Grid.Column>
            <Grid.Column width={6} style={{marginTop:'5%'}}>
              <center style={{marginBottom:'5%',fontSize:'16px',fontFamily: 'Comfortaa, cursive',color:'#8B8B8B'}}>
                <p style={{fontFamily: 'Comfortaa, cursive'}}>About</p>
              </center>
              <p className='textcolor' style={{marginTop:'2px',textAlign:'center',fontSize:'18px',fontFamily: 'Comfortaa, cursive',wordSpacing:'0px',fontWeight:'1000'}}>Find out about our organization, <br/>mission, our methods, and the results of <br/>our decades of advocacy.</p>
                <center>
                  <Button circular style={{backgroundColor:'#64ADA7',color:'white'}}>Learn More</Button>
                </center>
            </Grid.Column>
            <Grid.Column width={2}/>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}/>
            <Grid.Column width={6} style={{marginTop:'5%'}}>
              <center style={{marginBottom:'5%',fontSize:'16px',fontFamily: 'Comfortaa, cursive',color:'#8B8B8B'}}>
                <p>Contact Us</p>
              </center>
              <p className='textcolor' style={{marginTop:'2px',textAlign:'center',fontSize:'18px',fontFamily: 'Comfortaa, cursive',wordSpacing:'0px',fontWeight:'1000'}}>Find out about our organization, <br/>mission, our methods, and the results of <br/>our decades of advocacy.</p>
                <center>
                  <Button circular style={{backgroundColor:'#64ADA7',color:'white'}} onClick={this.GoToGallery.bind(this)}>Find Out How</Button>
                </center>
            </Grid.Column>
            <Grid.Column width={6}>
              <Image src='http://cyleyoung.com/wp-content/uploads/2017/10/636216642862373135-878299960_art.jpg'/>
            </Grid.Column>
            <Grid.Column width={2}/>
          </Grid.Row>
        </Grid>

      </div>

    );
  }
}
