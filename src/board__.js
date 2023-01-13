import React, { useState } from "react"
import "./styles/board.css"
import { MenuBook, Home, Room, FileCopy, InsertPhoto, Event, Mail, Notifications, Add, Settings, ChevronRight, ChevronLeft, FiberPinRounded, PersonSearch, Tag } from "@mui/icons-material";
import { Avatar, Badge, Box, Container, IconButton } from "@mui/material";

import Drawer from './components/customDrawer'

import Profile from "./components/Profile"
import Leftsub from "./components/Leftsub";
import Message from "./components/Message";
import StatusForm from "./components/StatusForm";

const Board = () => {
  const [right, setR] = useState(false)

  return (
    <Container>
{/* --------------------------------- left --------------------------------- */}
      {/**<Drawer variant="permanent"
        anchor={'left'}
        className="left-side">
        <div className="side-wrapper">
          <div className="side-title">MENU</div>
          <div className="side-menu">
            <a href="#">
              <Home/>
              Home
            </a>
            <a href="#">
              <MenuBook/>
              Latest News
            </a>
            <a href="#">
              <Room/>
              Explore
            </a>
            <a href="#">
              <FileCopy/>
              Files
            </a>
            <a href="#">
              <InsertPhoto/>
              Galery
            </a>
            <a href="#">
              <Event/>
              Events
            </a>
          </div>
        </div>
        <div className="account">
          <IconButton>
            <Badge badgeContent={0} max={99} overlap="circular" color="primary">
              <Mail/>
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={0} max={99} overlap="circular" color="primary">
              <Notifications/>
            </Badge>
          </IconButton>
        </div>
        <span className="account-user">
          <Avatar alt="User profile" src="" sx={{ width: 40, height: 40 }} className="account-profile" />
          Username
        </span>
        <div className="search-bar-svgs">
          <Settings/>
          <Add/>
        </div>
  </Drawer>*/}
{/* -------------------------------------------------------------------------- */}
      <Box className="main">
        <div className="logo">BoopedBy</div>
        {/* search bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        {/** main */}
        <div className="main-container">
          <Profile/>
          {/** page */}
          <div className="timeline">
            {/** left line */}
            {/** <Leftsub/> */}
            {/** main line */}
            <div className="timeline-main">
              <StatusForm/>
              {/** timeline */}
              <Message/>
              <Message/>
              <Message/>
              <Message/>
            </div>
          </div>
        </div>
      </Box>
{/* ---------------------------------- right --------------------------------- 
      <Drawer anchor={'right'} open={right} onClose={() => setR(false)} className="right-side">
        <div className="side-wrapper stories">
          <div className="side-title">LAST</div>
          {/ ------------------------------ last messages ----------------------------- /}
          <div className="user">
            <img src="https://pbs.twimg.com/profile_images/1102351320567164931/ZCkJgJIH.png" alt="" className="user-img" />
            <div className="username">Lisandro Matos
              <div className="album-date">12 hours ago</div>
            </div>
          </div>
        </div>
        {/ -------------------------------------------------------------------------- /}
        <div className="side-wrapper contacts">
          <div className="side-title">CONTACTS</div>
          {/ --------------------------------- follows -------------------------------- /}
          <div className="user">
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
              color="error"
              badgeContent={1}
              sx={{ width: 45, height: 45 }}
            >
              <Avatar alt="Remy Sharp" src="" className="user-img" sx={{ width: 45, height: 45 }}/>
            </Badge>
            <div className="username" style={{paddingLeft: 15}}>Andrei Mashrin</div>
          </div>
          {/ -------------------------------------------------------------------------- /}
        </div>
        <div className="search-bar right-search">
          <input type="text" placeholder="Search" />
        </div>
      </Drawer>/*}
{/* -------------------------------------------------------------------------- */}
    </Container>
  )
}

export default Board