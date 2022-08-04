function active_box_shadow_menu(){

    var value = document.documentElement.scrollTop;
    var navbar = document.getElementById('navbar');

    if(value>0){
        navbar.classList.add('navbar_content_box_shadow');
    }else if(value<=0){
        navbar.classList.remove('navbar_content_box_shadow');
    }
}

function verify_subscribe(){

    var text_email = document.getElementById("email").value;
    var send_button = document.getElementById("send_button");
    var disabledFieldsetCheck = document.getElementById("disabledFieldsetCheck");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(disabledFieldsetCheck.checked == true && text_email !=""){
        if(text_email.match(mailformat)){
            send_button.disabled = false;
        }else{
            send_button.disabled = true;
        }   
    }else{
        send_button.disabled = true;
    }
}