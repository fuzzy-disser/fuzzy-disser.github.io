$(document).ready(function(){
    var subjectsMultiselect =  window.subjectsMultiselect === undefined ? true : window.subjectsMultiselect;

    if (!subjectsMultiselect) {
        $("#subjects").removeAttr("multiple"); 
    }
    
    $("#subjects option").each(function(){

        var subject = $("#" + $(this).attr('id') + ".subject-item");
        console.log(subject);
        $("#picked-subjects").append($(subject).clone());
        $(subject).addClass('active');

    });

    $(" .pick-subject .subject-item").click(function(){
        
        var id = $(this).attr("id");
        
        if($(this).hasClass("active")){

            $(this).removeClass("active");
            $("#picked-subjects").children("#"+id).remove();
            $("#subjects").children("#"+id).remove();
            
            
        } else {

            var subject = $(this).clone();
            var method = subjectsMultiselect ? 'append' : 'html';

            $("#picked-subjects")[method](subject);
            $("#subjects")[method]($('<option id="'+id+'" value="'+id+'" selected="selected">'+id+'</option>'));

            if (!subjectsMultiselect) {
                $(" .pick-subject .subject-item").removeClass("active"); 
            }

            $(this).addClass("active");
            
        }

        $("#subjects").trigger('optionAdded',  [$("#subjects")[0].options ] );

        return false;
        
    });
});
