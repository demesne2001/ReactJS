import axios from "axios"

export default async function post(inputJson, APINAME, defaultRes, methodType) {

    
    if (methodType === "post") {
console.log('APIInput',inputJson)
        let header = {
            'Authorization': localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        return await axios.post(APINAME, inputJson, { headers: header })
            .then((res) => {
                console.log('APIInputres',res)
                if (res.data.HasError === true) 
                {
                    
                    defaultRes['statusText'] = res.data.Message[0]
                    defaultRes['status'] = 200
                    throw defaultRes
                }
                else
                {
                    return res
                }
               
            })
            .catch((E) => {
                if (E.status === 200) {
                    
                    defaultRes['Error'] = E.statusText
                    return defaultRes
                    // throw defaultRes
                }
                else {
                    
                    defaultRes['Error'] = E.response.statusText + " " + E.response.status
                    return defaultRes
                    // throw defaultRes
                }
            })

    }
}
