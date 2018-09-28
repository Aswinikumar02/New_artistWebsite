import React, { Component } from 'react'
import { Grid, Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AppBar from './Appbar.jsx';
import Gallery from 'react-grid-gallery';
import Request from 'superagent';
import ClientImage from './clientImage.jsx';

export default class Corporatepage extends Component {
  constructor() {
    super();
    this.state = {
      corporate:[],
      openmodel:false,
      clientArray:''
    }
    // this.handleclient = this.handleclient.bind(this);
    }

    handleclient(caption){
      const context = this;
      console.log('to check for image value',caption);
      Request.get('http://localhost:8082/allClientWork')
      .query({caption:caption})
      .end((err, res) => {
        if (err) console.log('Error in getting client - > ', err);
        console.log("list of client: ",res.text)
       context.setState({ clientArray: JSON.parse(res.text) });
       context.setState({openmodel:true})
     });
    }
componentWillMount() {
      const context = this;
      Request.get('http://localhost:8082/allCorporateImage')
             .end((err, res) => {
               if (err) console.log('Error in getting gallery - > ', err);
               console.log("list of Categories: ",res.text)
              context.setState({ corporate: JSON.parse(res.text) });
            });
    }
  render(){
    var client = this.state.corporate.map((item,key)=>{
      return(
        <Grid.Column width={3}>
        <Card onClick={this.handleclient.bind(this,item.caption)}>
          <Image src={item.thumbnail} style={{height:'26.5vh'}}/>
        </Card>
        </Grid.Column>
      )
    })
  return (
    <div>
      {this.state.openmodel == true ? <ClientImage client={this.state.clientArray}/> : null}
      <AppBar/>
      <Grid style={{marginTop:'1%'}}>
        <Grid.Row>
          <Grid.Column width={1}/>
          <Grid.Column width={14}>
            {/* <Image src='./../client/Images/clients1.jpg' style={{width:'100%',height:'2vh'}}/> */}
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}/>
          <Grid.Column width={14} style={{textAlign:'center',fontFamily: 'Comfortaa, cursive',fontSize:'16px'}}>
            <p>Gate fine arts has worked with may famous industries in designing the interior for their work place.</p>
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}/>
          <Grid.Column width={14} style={{textAlign:'center',fontFamily: 'Comfortaa, cursive',fontSize:'16px'}}>
            <p>List of companies</p>
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={2}/>

            {client}

          <Grid.Column width={2}/>
        </Grid.Row>
      </Grid>
          {/* <div style={{marginLeft:'5%',marginRight:'5%',display: "block",textAlign:'center'}}>
            <Gallery images={this.state.corporate} enableImageSelection={false}/>
          </div> */}
    </div>
  );
}
}
