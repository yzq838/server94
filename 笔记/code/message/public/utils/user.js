const user = {
    reg(formdata){
        return $.ajax({
            type:"post",
            url: API_LIST.user_reg,
            data:formdata,
            contentType:false,
            processData:false
        })
    },
    login(name,pwd) {
        return  $.ajax({
          url: API_LIST.user_login,
          type:'post',
          data:{
            name, pwd
          },
          crossDomain: true,
          xhrFields: {
              withCredentials: true
          }
        })
    },
    checkLogin() {
        return $.get(API_LIST.user_checkLogin)
    },
    logout(){
        return $.post(API_LIST.user_logout)
    }
}