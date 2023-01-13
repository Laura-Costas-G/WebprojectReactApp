import { Modal } from "@mui/material"
import { useRef } from "react"
import useUserStore from "../stores/user"
import style from "../styles/login.css"

const Login = () => {
    const state = useUserStore()

    const password = useRef()
    const email = useRef()

    const handleClick = (event) => {
        event.preventDefault()
        state.login(email.current.value, password.current.value)
    }

    return (
        <Modal
            open={!state.session.sub}
            aria-labelledby="modal-title"
            aria-describedby="modal-title"
        >
            <div className="login-box">
                <h2 id="modal-title">Login</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="" required="" ref={email}/>
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required="" ref={password}/>
                        <label>Password</label>
                    </div>
                    <button onClick={handleClick}>
                        Submit
                    </button>
                </form>
            </div>
        </Modal>
    )
}

export default Login