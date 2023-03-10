import React, { useEffect, useState } from "react"
import "./styles/board.css"
import { Box, Container } from "@mui/material";

import Profile from "./components/Profile"
import Message from "./components/Message";
import StatusForm from "./components/StatusForm";
import useUserStore from "./stores/user";
import useMsgsStore from "./stores/aws";

import Login from "./components/login"

const Board = () => {
  const status = useUserStore()
  const msgs = useMsgsStore()

  useEffect(() => {
    let i = setInterval(()=>msgs.getMsgs(), 5000)
    return () => clearInterval(i)
  },[])

  return (
    <Container>
      <Login/>
      <Box className="main">
        <div className="logo">BoopedBy</div>
        {/* search bar */}
        {/*
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>*/}
        {/** main */}
        <div className="main-container">
          {status.session.sub ? <Profile/> : null}
          {/** page */}
          <div className="timeline">
            {/** main line */}
            <div className="timeline-main">
              {status.session.sub ? <StatusForm/> : null}
              {/** timeline */}
              {msgs.msgs.listMsgs ? msgs.msgs.listMsgs.items.sort((a,b) => a.id < b.id).map((item, index) => <Message data={item} key={item.authorID+item.id}/>) : <p>Error while fetching posts</p>}
            </div>
          </div>
        </div>
      </Box>
    </Container>
  )
}

export default Board