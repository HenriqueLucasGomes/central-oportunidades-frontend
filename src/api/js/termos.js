function remunerado(){
    if (document.getElementById('check').checked) {   
        $('#remunera').css("visibility", "visible");
        $('#enviar').css("margin-top", "2.6%");
        $('.login-wrap').css("min-height", "2500px");
    }else{
        $('#remunera').css("visibility", "hidden");
        $('#enviar').css("margin-top", "-5%");
        $('.login-wrap').css("min-height", "2426px");
    }

}

function remunerado_e(){
    if (document.getElementById('check_e').checked) {   
        $('#remunera_e').css("visibility", "visible");
        $('#enviar_e').css("margin-top", "2.6%");
        $('.login-wrap').css("min-height", "2500px");
    }else{
        $('#remunera_e').css("visibility", "hidden");
        $('#enviar_e').css("margin-top", "-5%");
        $('.login-wrap').css("min-height", "2426px");
    }

}
