import { API, DataStore } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { ulid } from 'ulid'
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware'
import useUserStore from './user';

// session store with redux devtools log
const useMsgsStore = create(
    devtools(
        persist(
            (set, get) => ({
                // messages
                msgs: {},
                
                // get messages
                getMsgs: async () => {
                    try{
                        const res = await API.graphql({ 
                            query: queries.listMsgs, 
                            variables: { 
                                /*filter: {
                                    type: { 
                                        eq: "MSG"
                                    }, 
                                    /*id: {
                                        beginsWith: "MSG"
                                    }
                                }*/
                            }
                        });
                        set({msgs: await res.data})
                        console.info(get().msgs.listMsgs.items)
                        return get().msgs
                    }catch(e){
                        console.warn(e.message)
                    }
                },
                // send message
                postMsg: async (text) => {
                    const res = await API.graphql({ 
                        query: mutations.createMsg, 
                        variables: {
                            input: {
                                authorID: useUserStore.getState().session.sub,
                                id: ulid()+"",
                                text: text
                            }
                        }
                    })
                }
/* -------------------------------------------------------------------------- */
            }),
            {
              name: 'msg-data', // unique name
              getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
            }
        ),
        { 
            name: "Msgs",
            anonymousActionType: 'MsgAction',
            enabled: true 
        }
    )
);

export default useMsgsStore