import React, { Component } from 'react'
import { Grid, Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AppBar from './Appbar.jsx';
import Gallery from 'react-grid-gallery';
import Request from 'superagent';
import ImageGallery from 'react-image-gallery';
// import FullScreenGallery from './fullScreenGallery.jsx';

export default class Gallerypage extends Component {
  constructor() {
    super();
    this.state = {
      gallery: [],
      // currentImage:0,
      // open:false
    }
    // this.onCurrentImageChange = this.onCurrentImageChange.bind(this);
    // this.handleImage = this.handleImage.bind(this);
  }
  componentWillMount() {
    const context = this;
    console.log('hiiiiiiiiiiiiiii');
    Request.get('http://localhost:8082/allGalleryImage')
           .end((err, res) => {
             if (err) console.log('Error in getting gallery - > ', err);
             console.log("list of Categories: ",res.text)
            context.setState({ gallery: JSON.parse(res.text) });
          });
  }
  // onCurrentImageChange(index) {
  //       this.setState({ currentImage: index })
  //   }
  // handleImage(index){
  //   console.log('inside image gallery',this.state.currentImage);
  //   this.setState({open:true})
  // }
  render(){
  return (
    <div>
      <AppBar/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}/>
            <Grid.Column width={8}>
              <p style={{textAlign:'center',fontSize:'40px',fontFamily: 'Comfortaa, cursive'}}>Gate Fine Arts</p>
              <p style={{textAlign:'center',fontSize:'18px',marginTop:'-6%',fontFamily: 'Comfortaa, cursive'}}>Photo Gallery</p>
            </Grid.Column>
            <Grid.Column width={4}/>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}/>
            <Grid.Column width={14}>
              <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    border: "1px solid #ddd",
                    overflow: "auto"}}>
                <Gallery
            images={this.state.gallery}
            enableLightbox={false}
            enableImageSelection={false}
            // onClickThumbnail={this.handleImage}
            // currentImageWillChange={this.onCurrentImageChange}
          />
                </div>
            </Grid.Column>
            <Grid.Column width={1}/>
          </Grid.Row>
        </Grid>
{/* {this.state.open == true ? <FullScreenGallery index={this.state.currentImage} gallery={this.state.gallery}/> : null} */}
    </div>
  );
}
}
