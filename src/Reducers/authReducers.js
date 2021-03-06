export const initialGet = {
    status: false,
    status_get: false,
    data: [],
    message: ""
}

export function redAuth_(state = initialGet, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                status: true,
                status_get: action.status_get,
                data: action.data,
                message: action.message
            }
        case "LOGIN_RESET":
            return {
                status: false,
                status_get: false,
                data: [],
                message: ""
            }
        default:
            return state;
    }
}