import axios from "axios"

function post(inputJson,APINAME,defaultRes){
    return errorHandler(()=>{
        axios.post(APINAME,inputJson).then((res)=>console.log(res))
    },defaultRes)
}
async function errorHandler(callback,defaultRes){
    try{
        return await callback()
    }catch(E){
        console.log(E)
        return defaultRes;
    }
}

