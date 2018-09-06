import React, { Component } from 'react'
import { Grid, Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AppBar from './Appbar.jsx';
import HomeContent from './HomeContent.jsx';
import Footer from './Footer.jsx';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import Reveal from 'react-reveal';
// import 'animate.css/animate.css';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      name:'Aswini'
    }
  }
// handlesubmit(){
//   console.log('in home',this.props.history);
//   this.props.history.push({pathname:'/content',state:{value:this.state.name}});
// }
  render(){
  return (
    <div style={{overflow:'hidden'}}>
      <AppBar/>
      <Grid style={{marginTop:'0%'}}>
        <Reveal effect="animated fadeInUp">
        <div className="carosel" style={{
          postion: "relative"
        }}>
          <AutoPlaySwipeableViews >
            <div >
              <img height="450px" width="100%" src="https://st.hzcdn.com/simgs/83c1c47d0fdafbff_4-9759/contemporary-kitchen.jpg"/>
            </div>
            <div>
              <img height="450px" width="100%" src="http://forwwarddesign.com/wp-content/uploads/2016/12/landscape-painting-petru-bejan.preview-600x372.jpg"/>
            </div>
            <div>
              <img height="450px" width="100%" src="https://s3.amazonaws.com/dywimages/app/public/spree/taxons/9/normal/wallmurals.jpg"/>
            </div>
            <div>
              <img height="450px" width="100%" src="http://winduprocketapps.com/wp-content/uploads/2018/07/nature-wall-murals-amazing-landscape-eazywallz-eazywallz-pertaining-to-6.jpg"/>
            </div>
            <div>
              <img height="450px" width="100%" src="https://cdn.shopify.com/s/files/1/0278/7891/products/IDCQW-000251-1_large.jpg?v=1495375837"/>
            </div>
          </AutoPlaySwipeableViews>
        </div>
      </Reveal>
      </Grid>
      <HomeContent/>
      <Footer/>
    </div>
  );
}
}
