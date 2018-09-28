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
  componentWillMount(){
    var imagearray = [];
    var imagearray1 = [];
    imagegallery = this.props.gallery.map((item,key)=>{
      console.log('==============>',item.count,"-------->",this.props.index);
      if(item.count === this.props.index){
        console.log('to check inside if');
        // imagearray = imagearray.push(item)
        return(
          <div>
            <p>sdfghjkl</p>
            <ImageGallery items={imagearray}  />
          </div>

        )

      }
      else{
        // imagearray1 = imagearray1.push(item)
        return(

          <ImageGallery items={imagearray} showThumbnails={false} />
        )
      }
    })
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
          <Icon name='cancel' style={{float:'left'}} onClick={this.handleClose.bind(this)} id='closeIconPosition'/>
          <div style={{width:'50%',height:'80vh',marginTop:'-10%'}}>
            {imagegallery}
          </div>
      </Dimmer>
    );
  }
}
