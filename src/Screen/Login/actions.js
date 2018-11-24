import Api from "../../Utils/Api";

export function actLogin() {
    let string = '';
    return dispatch =>{
        dispatch({
            type:'LOGIN',
            status_get : true,
            data : [],
            message : 'success'
        })
    }

}