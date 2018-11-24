import Api from "../../Utils/Api";

export function actGetcontact(params) {
    return dispatch =>{
        // console.log("sddssdsd");
        Api.GET('contacts', params)
            .then((response)=>{
                if (response.data.success){
                    dispatch({
                        type : 'CONTACTS',
                        status_get : true,
                        data : response.data.data,
                        message : 'success'
                    })
                } else {
                    dispatch({
                        type: 'CONTACTS',
                        status_get: false,
                        data: [],
                        message: 'failed'
                    })
                }
                console.log(response)
            }).catch((err)=>{
                dispatch({
                    type : 'CONTACTS',
                    status_get : false,
                    data : [],
                    message : err.message
                })
        })
    }
    
}