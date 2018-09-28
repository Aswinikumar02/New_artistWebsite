import React, { Component } from "react";
import {Menu, Segment, Image} from 'semantic-ui-react';
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
      <div>
        <Menu pointing secondary size='massive' style={{height:'15vh'}}>
          <Link to='/'>
          <Menu.Item className='appBarLeftMenuItem' style={{color:'black',marginBottom:'0px',marginLeft:'90px',marginTop:'-7px',position:'relative',zIndex:1}}>
            <Image src='./client/Images/logo web.png' size='tiny'/>
          </Menu.Item>
          </Link>
          <Menu.Menu position='right' style={{
            marginTop:'1%',
            // marginLeft:'20%',
            marginRight:'10%'
          }}>
          <Link to='/'>
            <Menu.Item name='home' className='appBarRightMenuItem' style={{color:'black'}}/>
            </Link>
            <Link to='/gallery'>
              <Menu.Item name='gallery' className='appBarRightMenuItem' style={{color:'black'}} />
            </Link>
            <Link to='/corporate'>
              <Menu.Item name='clients' className='appBarRightMenuItem' style={{color:'black'}}/>
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
