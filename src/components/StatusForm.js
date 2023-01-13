import { Avatar } from "@mui/material"
import { useRef } from "react"
import useMsgsStore from "../stores/msgs"
import useUserStore from "../stores/user"

const StatusForm = () => {
    const status = useUserStore()
    const msgs = useMsgsStore()
    const text = useRef()

    const handleSubmit = () => {
        msgs.postMsg(status.session.sub, text.current.value)
    } 

    return (
        <div className="status box">
            <div className="status-menu">
                <span>What's on your mind?</span>
            </div>
            <div className="status-main">
                {/*<Avatar alt="User profile" src="" sx={{ width: 50, height: 50, marginRignt: 20 }} className="status-img" />*/}
                <textarea ref={text} className="status-textarea" placeholder="Write something for the world to read..."></textarea>
            </div>
            <div className="status-actions">
                {/*<a href="#" className="status-action">
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
                </a>*/}
                <button className="status-share" onClick={handleSubmit}>Send</button>
            </div>
        </div>
    )
}

export default StatusForm