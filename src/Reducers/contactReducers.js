import {initialGet} from "../Utils/initialState";

export function contactsReducers(state = initialGet, action) {
    switch (action.type) {
        case 'CONTACTS':
            return {
                status : true,
                status_get : action.status_get,
                data : action.data,
                message : action.message
            }
        case 'CONTACTS_RESET':
            return {
                status : false,
                status_get: false,
                data: [],
                message: ""
            }
        default :
            return state
    }
}