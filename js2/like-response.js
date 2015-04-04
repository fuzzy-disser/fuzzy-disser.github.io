$(".hidden-input").hide();
$(".hidden-input").each(function(){
    
    var input = this,
        likeButtonClasses = {
	        like: 'btn-success active',
	        dislike: 'btn-danger active'
        };

    if ($(input).prop('checked') == true) {

        $(".hidden-input").each(function(thisInput) {
            $(thisInput).parent().removeClass('active');
        });

        $(input).parent().addClass('active');
        
    }
    
    $(input).parent().bind('click', function() {

        $(".hidden-input").each(function(thisInput) {
            $(thisInput).prop('checked', false);
        });
        console.log( input );
        $(input).prop('checked', true);
    });
});
