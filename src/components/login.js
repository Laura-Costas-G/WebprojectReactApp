import { Button, ButtonBase, Modal } from "@mui/material"
import { useRef, useState } from "react"
import useUserStore from "../stores/user"
import style from "../styles/login.css"

const Login = () => {
    const state = useUserStore((state) => state,
        (old, news) => old.session.sub === news.session.sub)

    const [isSignUp, setSignUp] = useState(false)

    const password = useRef()
    const email = useRef()
    const name = useRef()
    const code = useRef()

    const handleClick = (event) => {
        event.preventDefault()
        !isSignUp ?
            state.login(email.current.value, password.current.value)
            :
            state.signup(email.current.value, password.current.value, name.current.value)
    }

    const handleCode = async (event) => {
        event.preventDefault()
        const res = await state.confirmSignUp(email.current.value, code.current.value)
        console.info(res)
        if(res === "SUCCESS") {
            state.login(email.current.value, password.current.value)
        }
    }

    return (
        <Modal
            open={!state.session.sub}
            aria-labelledby="modal-title"
            aria-describedby="modal-title"
            //keepMounted={true}
        >
            {!isSignUp ?
            <div className="login-box">
                <h2 id="modal-title">Login</h2>
                <form>
                    <div className="user-box">
                        <input key="mail" type="text" name="" required="" ref={email}/>
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input key="pass" type="password" name="" required="" ref={password}/>
                        <label>Password</label>
                    </div>
                    <Button variant="outlined" onClick={handleClick}>
                        Submit
                    </Button>
                    <Button variant="text" onClick={() => setSignUp(true)}>
                        SignUp
                    </Button>
                </form>
            </div>
            :
            <div className="login-box">
                <h2 id="modal-title">SignUp</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="" required="" ref={name}/>
                        <label>Name</label>
                    </div>
                    <div className="user-box">
                        <input key="mail" type="text" name="" required="" ref={email}/>
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input key="pass" type="password" name="" required="" ref={password}/>
                        <label>Password</label>
                    </div>
                    <Button variant="outlined" onClick={handleClick}>
                        Submit
                    </Button>
                    <Button variant="text" onClick={() => setSignUp(false)}>
                        Login
                    </Button>
                    <div className="user-box">
                        <input type="text" name="" required="" ref={code}/>
                        <label>Validation mail code</label>
                    </div>
                    <Button variant="outlined" onClick={handleCode}>
                        Verify
                    </Button>
                </form>
            </div>
            }
        </Modal>
    )
}

export default Login