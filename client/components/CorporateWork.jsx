import React, { Component } from 'react'
import { Grid, Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AppBar from './Appbar.jsx';
import Gallery from 'react-grid-gallery';
import Request from 'superagent';

export default class Corporatepage extends Component {
  constructor() {
    super();
    this.state = {
      corporate:[]
    }
    }
componentWillMount() {
      const context = this;
      console.log('helllllllllooooooo');
      Request.get('/allCorporateImage')
             .end((err, res) => {
               if (err) console.log('Error in getting gallery - > ', err);
               console.log("list of Categories: ",res.text)
              context.setState({ corporate: JSON.parse(res.text) });
            });
    }
  render(){
  return (
    <div>
      <AppBar/>
          <div style={{marginLeft:'5%',marginRight:'5%',display: "block",textAlign:'center'}}>
            <Gallery images={this.state.corporate} enableImageSelection={false}/>
          </div>
    </div>
  );
}
}
