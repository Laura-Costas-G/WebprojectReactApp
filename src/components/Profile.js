import { Logout } from "@mui/icons-material"
import { Avatar, Button, ButtonBase, IconButton } from "@mui/material"
import useUserStore from "../stores/user"

const Profile = () => {
  const state = useUserStore()

  const handleLogout = () => {
    state.logout()
  }

  const name = state.session.name || state.session.email || "annonimous"

    return (
        <div className="profile">
            <div className="profile-avatar">
              <Avatar alt="User profile" src="" sx={{ width: 150, height: 150 }} className="profile-img" />
              <div className="profile-name">{name}</div>
            </div>
            {/** banner */}
            <img src="https://images.unsplash.com/photo-1508247967583-7d982ea01526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="" className="profile-cover" />
            <div className="profile-menu">
              <a className="profile-menu-link active">Timeline</a>
              <a className="profile-menu-link">About</a>
            </div>
            <Button endIcon={<Logout />} size="medium" className="logoutbtn" onClick={handleLogout}>
              <span>LOGOUT</span>
            </Button>
        </div>
    )
}

export default Profile