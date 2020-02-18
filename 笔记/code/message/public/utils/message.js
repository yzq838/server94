const message = {
    get(dt){
        return $.get(API_LIST.msg_get,{dt})
    },
    add(content) {
        return  $.post(API_LIST.msg_add,{content})
    }
}