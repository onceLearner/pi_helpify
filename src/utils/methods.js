let a = 0;

const url = {
    local: "http://localhost:8081",
    remote: "https://helpify-back.herokuapp.com"
}


/**
 * 
 * @param {String} extension  path (/user/users)
 */

export const rightUrl = (extension) => {


    return url.remote + extension


}