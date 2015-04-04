$(document).ready(function(){
    
    $("#call-me-form-open").click(function(){
        $("#call-me-form-open").hide();
        $("#call-me-form").show();
        $("#call-me-phone").focus();                   
    });
    
    $("#call-me-form").submit(function(event){

        event.preventDefault();
        
        $.ajax({
            type: "POST",
            url: "/site/callme",
            data: { phone: $("#call-me-phone").val()},
            beforeSend: function(xhr) {

                $("#call-me-phone").prop('disabled', true);
                $("#send-call-me-phone").prop('disabled', true);;
                $("#send-call-me-phone").val("Отправляю...");
            }

        })

            .done(function( msg ) {

                $("#call-me-form").hide();
                $("#call-me-thankyou").show();

            });
        
        return false;
    });
});
