import create from 'zustand';
import { devtools, persist } from 'zustand/middleware'
import themes from "../styles/themes"
import { Auth } from 'aws-amplify';
import useMsgsStore from './aws';

// session store with redux devtools log
const useUserStore = create(
    devtools(
        persist(
            (set, get) => ({
                // aws cognito object
                user: {},
                // user data
                session: {},
                //? temporal object to use in functions
                temp: {},
                // local user preferences
                prefs: {theme: themes.dark, color: false},

                // get the current authentificated user in cognito
                getUser: async () => {
                    const res = await Auth.currentAuthenticatedUser()
                    set({user: await res, session: await res.attributes})
                    return get().user
                },
                // get current user info
                getUserInfo: async () => {
                    const res = await Auth.currentUserInfo()
                    return res
                },
                // login function
                login: async (email, password) => {
                    const res = await Auth.signIn(email.toLowerCase(), password)
                    if(res.challengeName === 'NEW_PASSWORD_REQUIRED')
                        Auth.completeNewPassword(res, password);
                    set({user: await res, session: await res.attributes})
                    useMsgsStore.getState().getUser()
                },
                // log out function
                logout: async () => {
                    const res = await Auth.signOut()
                    set({user: {}, session: {}})
                    useMsgsStore.setState({user: {}})
                },
                // log out every device
                logoutGlobal: async () => {
                    await Auth.signOut({ global: true })
                    const res = await Auth.signOut()
                    set({user: {}, session: {}})
                },
                // delete user from the user pool
                delete: async () => {
                    const res = Auth.deleteUser()
                },
                // sign up function
                signup: async (email, password, name) => {
                    name = name || ""
                    const res = await Auth.signUp({
                        username: email.toLowerCase(),
                        password,
                        attributes: {
                            name,          // optional
                        },
                        autoSignIn: { // optional - enables auto sign in after user is confirmed
                            enabled: true,
                        }
                    })
                },
                // send the email confirmation code again
                resendCode: async (email) => {
                    const res = await Auth.resendSignUp(email.toLowerCase())
                },
                // confirm email with code
                confirmSignUp: async (email, code) => {
                    const res = await Auth.confirmSignUp(email.toLowerCase(), code)
                    return res
                },
                // change password when temporal password was assigned by admin
                setUserPassword: async (password) => {
                    const res = await Auth.completeNewPassword(get().user, password)
                },
                // change password function
                changePasswd: async (oldPassword, newPassword) => {
                    const res = await Auth.changePassword(get().user, oldPassword, newPassword)
                },
                // get trusted devices for user
                fetchDevices: async () => {
                    const res = await Auth.fetchDevices()
                    return res
                },
                // set this device as untrusted
                forgetDevice: async () => {
                    const res = await Auth.forgetDevice()
                },
                // set this device as trusted
                rememberDevice: async () => {
                    const res = await Auth.rememberDevice()
                },
                // initiate the forgot password request
                forgotPassword: async (email) => {
                    const res = await Auth.forgotPassword(email)
                },
                // submit new password
                forgotPasswordSubmit: async (email, password, code) => {
                    const res = await Auth.forgotPasswordSubmit(email, code, password)
                },
/* -------------------------------------------------------------------------- */
            }),
            {
              name: 'user-data', // unique name
              getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
            }
        ),
        { 
            name: "User",
            anonymousActionType: 'UserAction',
            enabled: true 
        }
    )
);

export default useUserStore