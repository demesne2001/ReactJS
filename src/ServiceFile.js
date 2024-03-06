import axios from "axios"

export default async function post(inputJson, APINAME, defaultRes, methodType) {

    
    if (methodType === "post") {

        let header = {
            'Authorization': localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        return await axios.post(APINAME, inputJson, { headers: header })
            .then((res) => {
               
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
                    alert(E.statusText)
                    defaultRes['Error'] = E.statusText
                    return defaultRes
                    // throw defaultRes
                }
                else {
                    alert(E.response.statusText)
                    defaultRes['Error'] = E.response.statusText + " " + E.response.status
                    return defaultRes
                    // throw defaultRes
                }
            })

    }
}
// catch (E) {
//     alert(E.Error)
//     console.log('manaulthrow', E)
//     defaultRes['Error'] = E
//     return defaultRes;
// }

// async function errorHandler(callback, defaultRes) {
//     try {
//         return await callback()
//     } catch (E) {
//         alert(E)
//         console.log('Function', E)
//         defaultRes['Erroe'] = E
//         return defaultRes;
//     }
// }