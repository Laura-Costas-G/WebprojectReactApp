import React, { useState } from "react"
import "./styles/board.css"
import { MenuBook, Home, Room, FileCopy, InsertPhoto, Event, Mail, Notifications, Add, Settings, ChevronRight, ChevronLeft, FiberPinRounded, PersonSearch, Tag } from "@mui/icons-material";
import { Avatar, Badge, Box, Container, IconButton } from "@mui/material";

import Drawer from './components/customDrawer'

const Board = () => {
  const [right, setR] = useState(false)

  return (
    <Container>
{/* --------------------------------- left --------------------------------- */}
      <Drawer variant="permanent"
        anchor={'left'}
        className="left-side">
        
        <div className="logo">BoopedBy</div>
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
      </Drawer>
{/* -------------------------------------------------------------------------- */}
      <Box className="main">
        {/* search bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        {/** main */}
        <div className="main-container">
          <div className="profile">
            <div className="profile-avatar">
              <Avatar alt="User profile" src="" sx={{ width: 150, height: 150 }} className="profile-img" />
              <div className="profile-name">Quan Ha</div>
            </div>
            {/** banner w:1112px 100% h:256.4px 100% */}
            <img src="https://images.unsplash.com/photo-1508247967583-7d982ea01526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="" className="profile-cover" />
            <div className="profile-menu">
              <a className="profile-menu-link active">Timeline</a>
              <a className="profile-menu-link">About</a>
              <a className="profile-menu-link">Friends</a>
              <a className="profile-menu-link">Photos</a>
              <a className="profile-menu-link">More</a>
            </div>
          </div>
          {/** page */}
          <div className="timeline">
            {/** left line */}
            <div className="timeline-left">
              <div className="intro box">
                <div className="intro-title">
                  Introduction
                  <button className="intro-menu"></button>
                </div>
                <div className="info">
                  <div className="info-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503.889 503.889" fill="currentColor">
                      <path d="M453.727 114.266H345.151V70.515c0-20.832-16.948-37.779-37.78-37.779H196.517c-20.832 0-37.78 16.947-37.78 37.779v43.751H50.162C22.502 114.266 0 136.769 0 164.428v256.563c0 27.659 22.502 50.161 50.162 50.161h403.565c27.659 0 50.162-22.502 50.162-50.161V164.428c0-27.659-22.503-50.162-50.162-50.162zm-262.99-43.751a5.786 5.786 0 015.78-5.779h110.854a5.786 5.786 0 015.78 5.779v43.751H190.737zM32 164.428c0-10.015 8.147-18.162 18.162-18.162h403.565c10.014 0 18.162 8.147 18.162 18.162v23.681c0 22.212-14.894 42.061-36.22 48.27l-167.345 48.723a58.482 58.482 0 01-32.76 0L68.22 236.378C46.894 230.169 32 210.321 32 188.109zm421.727 274.725H50.162c-10.014 0-18.162-8.147-18.162-18.161V253.258c8.063 6.232 17.254 10.927 27.274 13.845 184.859 53.822 175.358 52.341 192.67 52.341 17.541 0 7.595 1.544 192.67-52.341 10.021-2.918 19.212-7.613 27.274-13.845v167.733c.001 10.014-8.147 18.162-18.161 18.162z" /></svg>
                    Job at <a href="#">Enterprise</a>
                  </div>
                  <div className="info-item">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <path d="M9 22V12h6v10" />
                    </svg>
                    Live in <a href="#">Place</a>
                  </div>
                  <div className="info-item">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                      <path d="M437 75C388.7 26.6 324.4 0 256 0S123.3 26.6 75 75C26.6 123.3 0 187.6 0 256s26.6 132.7 75 181c48.3 48.4 112.6 75 181 75s132.7-26.6 181-75c48.4-48.3 75-112.6 75-181s-26.6-132.7-75-181zM252.4 481.9c-52-.9-103.7-19.5-145.2-55.8L256 277.2l21.7 21.8a165.9 165.9 0 00-35.7 87c-3.5 30.5 0 63.3 10.4 95.9zM299 320.3l105.7 105.8a224.8 224.8 0 01-121.3 54.1C262 419.5 268 360.3 299 320.3zm21.2-21.2c40-31 99.2-37 160-15.6A224.8 224.8 0 01426 404.8zM482 252.4a231.7 231.7 0 00-96-10.4 165.9 165.9 0 00-87 35.7L277.3 256l148.9-148.8c36.3 41.5 55 93.2 55.8 145.2zm-290.2-39.5c-40 31-99.2 37-160 15.6A224.8 224.8 0 0186 107.2zm-84.5-127a224.8 224.8 0 01121.3-54.1C250 92.5 244 151.7 213 191.7zM270 126c3.5-30.5 0-63.3-10.4-95.9 52 .9 103.7 19.5 145.2 55.8L256 234.8 234.3 213a165.9 165.9 0 0035.7-87zM30 259.6a242 242 0 0072.7 11.7c7.8 0 15.6-.5 23.2-1.3a165.9 165.9 0 0087-35.7l21.8 21.7L85.9 404.8a225.3 225.3 0 01-55.8-145.2z" /></svg>
                    Player name <a href="#">Name</a>
                  </div>
                </div>
              </div>
              <div className="event box">
                <div className="event-wrapper">
                  <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" className="event-img" />
                  <div className="event-date">
                    <div className="event-month">Jan</div>
                    <div className="event-day">01</div>
                  </div>
                  <div className="event-title">Winter Wonderland</div>
                  <div className="event-subtitle">01st Jan, 2019 07:00AM</div>
                </div>
              </div>
            </div>
            {/** main line */}
            <div className="timeline-right">
              <div className="status box">
                <div className="status-menu">
                  <a className="status-menu-item active" href="#">Status</a>
                  <a className="status-menu-item" href="#">Photos</a>
                  <a className="status-menu-item" href="#">Videos</a>
                </div>
                <div className="status-main">
                  <Avatar alt="User profile" src="" sx={{ width: 50, height: 50, marginRignt: 20 }} className="status-img" />
                  <textarea className="status-textarea" placeholder="Write something to Quan Ha.."></textarea>
                </div>
                <div className="status-actions">
                  <a href="#" className="status-action">
                    <PersonSearch/>
                    People
                  </a>
                  <a href="#" className="status-action">
                    <Room/>
                    Check in
                  </a>
                  <a href="#" className="status-action">
                    <Tag/>
                    Mood
                  </a>
                  <button className="status-share">Share</button>
                </div>
              </div>
              {/** timeline */}
              <div className="album box">
                <div className="status-main">
                  <Avatar alt="User profile" src="" sx={{ width: 50, height: 50 }} className="status-img" />
                  <div className="album-detail">
                    <div className="album-title"><strong>UserName</strong></div>
                    <div className="album-date">6 hours ago</div>
                  </div>
                  <button className="intro-menu"></button>
                </div>
                <div className="album-content">When the bass drops, so do my problems.
                  <div className="album-photos">
                    <img src="https://images.unsplash.com/photo-1508179719682-dbc62681c355?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80" alt="" className="album-photo" />
                    <div className="album-right">
                      <img src="https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="" className="album-photo" />
                      <img src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" className="album-photo" />
                    </div>
                  </div>
                </div>
                <div className="album-actions">
                  <a href="#" className="album-action">
                    <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                    87
                  </a>
                  <a href="#" className="album-action">
                    <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1" viewBox="0 0 24 24">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                    20
                  </a>
                  <a href="#" className="album-action">
                    <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1" viewBox="0 0 24 24">
                      <path d="M17 1l4 4-4 4" />
                      <path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4" />
                      <path d="M21 13v2a4 4 0 01-4 4H3" />
                    </svg>
                    13
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
{/* ---------------------------------- right --------------------------------- */}
      <Drawer anchor={'right'} open={right} onClose={() => setR(false)} className="right-side">
        <div className="side-wrapper stories">
          <div className="side-title">LAST</div>
          {/* ------------------------------ last messages ----------------------------- */}
          <div className="user">
            <img src="https://pbs.twimg.com/profile_images/1102351320567164931/ZCkJgJIH.png" alt="" className="user-img" />
            <div className="username">Lisandro Matos
              <div className="album-date">12 hours ago</div>
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------------------------- */}
        <div className="side-wrapper contacts">
          <div className="side-title">CONTACTS</div>
          {/* --------------------------------- follows -------------------------------- */}
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
          {/* -------------------------------------------------------------------------- */}
        </div>
        <div className="search-bar right-search">
          <input type="text" placeholder="Search" />
        </div>
      </Drawer>
{/* -------------------------------------------------------------------------- */}
    </Container>
  )
}

export default Board