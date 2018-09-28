import React, { Component } from 'react'
import { Grid, Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Appbarhome from './Appbarhome.jsx';
import HomeContent from './HomeContent.jsx';
import Footer from './Footer.jsx';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import Reveal from 'react-reveal';
import Request from 'superagent';
// import 'animate.css/animate.css';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      slider:[]
    }
  }
  componentWillMount() {
    const context = this;
    console.log('hiiiiiiiiiiiiiii');
    Request.get('http://localhost:8082/allSliderImage')
           .end((err, res) => {
             if (err) console.log('Error in getting gallery - > ', err);
             console.log("list of Categories: ",res.text)
            context.setState({ slider: JSON.parse(res.text) });
          });
  }
  render(){
    console.log('to check for images from router',this.state.slider);
    const slider = this.state.slider.map((item,key)=>{
      return(
        <div >
          <img height="400px" width="100%" src={item.src}/>
        </div>
      )
    })
  return (
    <div>
      <Appbarhome/>
      <Grid>
            <Reveal effect="animated fadeInUp">
            <div className="carosel" style={{
              postion: "absolute",
              marginTop:'0px',
              marginLeft:'0px',
              width:'100%'
            }}>

              <AutoPlaySwipeableViews >
                {slider}
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
