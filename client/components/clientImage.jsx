import React, { Component } from "react";
import {Segment, Image, Dimmer, Grid, Card, Icon} from 'semantic-ui-react';
import { Link } from "react-router-dom";
import ImageGallery from 'react-image-gallery';


export default class AppBar extends React.Component
{
  constructor(prop)
  {
    super();
    this.state = {
      active: true
    };
  }
  handleOpen = () => this.setState({active: true})

  handleClose = () => {
    this.setState({active: false});
    this.props.closeModal();
  }
  render(){

    const {active} = this.state;
    // var clientImages = this.props.client.map((item,key)=>{
    //   console.log('toooooooooooooooooo',item.thumbnail);
    //   return(
    //       <Slider {...settings}>
    //       <div>
    //         <img src={item.thumbnail} style={{width:'40%'}}/>
    //       </div>
    //     </Slider>
    //   )
    // })
    return (
      <Dimmer active={active} page>
        {/* <Card style={{width:'100%'}}> */}
          <Icon name='cancel' style={{float:'left'}} onClick={this.handleClose.bind(this)} id='closeIconPosition'/>
          <div style={{width:'50%',height:'80vh',marginTop:'-10%'}}>
            <ImageGallery items={this.props.client} showThumbnails={false} />
          </div>
        {/* </Card> */}
        {/* <Grid> */}
          {/* <Grid.Row>
            <Grid.Column width={3}/>
            <Grid.Column width={10}> */}
              {/* {clientImages} */}

            {/* </Grid.Column>
            <Grid.Column width={3}/>
          </Grid.Row> */}
        {/* </Grid> */}
      </Dimmer>
    );
  }
}
