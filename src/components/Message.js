import { ChatBubbleOutline, FavoriteBorderOutlined, Reply, Share } from "@mui/icons-material"
import { Avatar, IconButton } from "@mui/material"

const Message = (props) => {
  console.info(props.data)
    return (
        <div className="album box">
        <div className="status-main">
          <Avatar alt="User profile" src="" sx={{ width: 50, height: 50 }} className="status-img" />
          <div className="album-detail">
            <div className="album-title"><strong>{props.data.author}</strong></div>
            <div className="album-date">{new Date(parseInt(props.data.createdAt)).toString()}</div>
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
          <FavoriteBorderOutlined className="album-action" fontSize="small"/>
          <ChatBubbleOutline className="album-action" fontSize="small"/>
          <Share className="album-action" fontSize="small"/>
        </div>
      </div>
    )
}

export default Message