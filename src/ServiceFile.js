import axios from "axios"

export default function post(inputJson, APINAME, defaultRes, methodType) {
    console.log('serviceres',inputJson)
    if (methodType === "post") {
        let header = {
            'Authorization': localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        return errorHandler(() => {
            axios.post(APINAME, inputJson, { headers: header }).then((res)=>console.log('serviceres',res))
        }, defaultRes)
    }
}
async function errorHandler(callback, defaultRes) {
    try {
        return await callback()
    } catch (E) {
        alert(E)
        defaultRes['Erroe'] = E
        return defaultRes;
    }
}