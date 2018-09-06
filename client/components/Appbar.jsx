import React, { Component } from "react";
import {Menu, Segment} from 'semantic-ui-react';
import {Modal, Button} from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class AppBar extends React.Component
{
  constructor(prop)
  {
    super();
    this.state = {

    };
  }
  render()
  {
    return (
      <div style={{overflow:'hidden'}}>
        <Menu pointing secondary size='massive' style={{height:'13vh'}}>
          <Link to='/'>
          <Menu.Item name='gatefineatrs' className='appBarLeftMenuItem' style={{color:'black',marginBottom:'-10px',marginLeft:'40px'}}>Gate Fine <br/>Arts Studio</Menu.Item>
          </Link>
          <Menu.Menu position='right' style={{
            marginRight: "55px",
            marginBottom:'10px',
            marginTop:'2.5%'
          }}>
          <Link to='/'>
            <Menu.Item name='home' className='appBarRightMenuItem' style={{color:'black'}}/>
            </Link>
            <Link to='/gallery'>
              <Menu.Item name='gallery' className='appBarRightMenuItem' style={{color:'black'}} />
            </Link>
            <Link to='/corporate'>
              <Menu.Item name='corporate work' className='appBarRightMenuItem' style={{color:'black'}}/>
            </Link>
            <Link to='/contactus'>
              <Menu.Item name='contact us' className='appBarRightMenuItem' style={{color:'black'}}/>
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
