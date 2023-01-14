import { Alert, Button, ButtonBase, Modal, Snackbar } from "@mui/material"
import { useRef, useState } from "react"
import useUserStore from "../stores/user"
import style from "../styles/login.css"

const type = ["success", "info", "warning", "error"]

const Login = () => {
    const state = useUserStore((state) => state,
        (old, news) => old.session.sub === news.session.sub)

    const [isSignUp, setSignUp] = useState(false)

    const [toast, setToast] = useState({ type: type[1], message: "info message", open: false})

    const password = useRef()
    const email = useRef()
    const name = useRef()
    const code = useRef()

    const handleClick = (event) => {
        event.preventDefault()
        try{
        !isSignUp ?
            state.login(email.current.value, password.current.value).catch((e) => {
                setToast({open: true, message: e.message, type: type[3]})
            })
            :
            state.signup(email.current.value, password.current.value, name.current.value).then((value) => {
                setToast({ type: type[1], message: "A verification code has been sent to the provided email", open: true})
            })
        }catch(e){
            setToast({open: true, message: e.message, type: type[3]})
        }
    }

    const handleCode = async (event) => {
        event.preventDefault()
        const res = await state.confirmSignUp(email.current.value, code.current.value)
        if(res === "SUCCESS") {
            state.login(email.current.value, password.current.value)
            setToast({open: true, message: "Verification succesful", type: type[0]})
        }
    }

    return (
        <>
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
        <Snackbar open={toast.open} autoHideDuration={6000} onClose={() => setToast({open: false})}>
            <Alert severity={toast.type} sx={{ width: '100%' }}>
                {toast.message}
            </Alert>
        </Snackbar>
        </>
    )
}

export default Login