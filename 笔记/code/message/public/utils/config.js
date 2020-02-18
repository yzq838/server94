const BASE_URL = "http://localhost:8081"

const API_LIST = {
    user_reg :BASE_URL + "/reg",
    user_login :BASE_URL + "/login",
    user_checkLogin: BASE_URL + "/checklogin",
    user_logout:BASE_URL + "/logout",

    msg_get:BASE_URL + "/getmsg",
    msg_add:BASE_URL + "/addmsg"
}

$.ajaxSetup({
    crossDomain: true,
    xhrFields: {
        withCredentials: true
    }
});