import { ChatBubbleOutline, FavoriteBorderOutlined, Reply, Share } from "@mui/icons-material"
import { Avatar, Badge, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from "@mui/material"
import { useEffect, useRef, useState } from "react";
import useMsgsStore from "../stores/aws"


function notificationsLabel(count) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}

const Comment = (props) => {
  const text = useRef()
  return (
    <Dialog open={props.open}>
        <DialogTitle>Comment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.data.text}
          </DialogContentText>
          <TextField
            ref={text}
            autoFocus
            margin="dense"
            id="comment"
            label="Comment"
            type="text"
            fullWidth
            variant="standard"
            multiline
            color="info"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.handleClose()}>Cancel</Button>
          <Button onClick={() => props.handleComment(text.current.children[1].children[0].value)}>Send</Button>
        </DialogActions>
      </Dialog>
  )
}

const Message = (props) => {
  const aws = useMsgsStore()

  const [comOpen, setComOpen] = useState(false)
  const [coms, setComs] = useState({})

  const handleComment = async (text) => {
    aws.postCom(props.data, text).then((value) => {
      setComOpen(false)
    })
  }

  useEffect(() => {
    let i = setInterval(() => aws.getComs(props.data).then((value) => {
      setComs(value.data.listComs.items)
    }), 5000)
    return () => clearInterval(i)
  }, [])

    return (
      <>
        <div className="album box">
        <div className="status-main">
          <Avatar alt="User profile" src="" sx={{ width: 50, height: 50 }} className="status-img" />
          <div className="album-detail">
            <div className="album-title"><strong>{props.data.author.name || props.data.author.email}</strong></div>
            <div className="album-date">{props.data.createdOn.substring(0,16).replace("T", " ")}</div>
          </div>
          <button className="intro-menu"></button>
        </div>
        <div className="album-content">{props.data.text}
          {props.data.pictures ? <div className="album-photos">
            <img src="https://images.unsplash.com/photo-1508179719682-dbc62681c355?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80" alt="" className="album-photo" />
            <div className="album-right">
              <img src="https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="" className="album-photo" />
              <img src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" className="album-photo" />
            </div>
          </div> : null}
        </div>
        <div className="album-actions">
          <IconButton aria-label={notificationsLabel(15)}>
            <Badge badgeContent={15} color="secondary" overlap="circular">
              <FavoriteBorderOutlined className="album-action" fontSize="small"/>
            </Badge>
          </IconButton>
          <IconButton aria-label={notificationsLabel(typeof(coms[0]) !== "undefined" ? coms.length : 0)}
            onClick={() => setComOpen(true)}>
            <Badge badgeContent={typeof(coms[0]) !== "undefined" ?coms.length : 0} color="secondary" overlap="circular">
              <ChatBubbleOutline className="album-action" fontSize="small"/>
            </Badge>
          </IconButton>
          <IconButton aria-label={notificationsLabel(0)}>
            <Badge badgeContent={0} color="secondary" overlap="circular">
              <Share className="album-action" fontSize="small"/>
            </Badge>
          </IconButton>
        </div>
        {
          typeof(coms[0]) !== "undefined" ? 
          coms.sort((a,b) => a.id < b.id).map((item, index) => {
            return (
            <div className="album-content" key={item.id}>
              {item.author.name}: {item.text}
            </div>
            )
          })
          :
          null
        }
      </div>
      <Comment open={comOpen} handleClose={() => setComOpen(false)} handleComment={handleComment} data={props.data}/>
      </>
    )
}

export default Message