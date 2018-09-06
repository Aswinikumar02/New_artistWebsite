import React, { Component } from 'react'
import { Grid, Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AppBar from './Appbar.jsx';
import Gallery from 'react-grid-gallery';
import Request from 'superagent';

export default class Gallerypage extends Component {
  constructor() {
    super();
    this.state = {
      gallery: []
    }
  }
  componentWillMount() {
    const context = this;
    console.log('hiiiiiiiiiiiiiii');
    Request.get('/allGalleryImage')
           .end((err, res) => {
             if (err) console.log('Error in getting gallery - > ', err);
             console.log("list of Categories: ",res.text)
            context.setState({ gallery: JSON.parse(res.text) });
          });
  }
  render(){
  return (
    <div>
      <AppBar/>
          <div style={{marginLeft:'5%',marginRight:'5%',display: "block"}}>
            <Gallery images={this.state.gallery} enableImageSelection={false} />
          </div>
    </div>
  );
}
}
