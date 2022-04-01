$( ".jqButton" ).click(function() { 
    $(".jqNewContent").html( "I told you :)" );
    $(".jqNewContent").prepend ("Oh NOOOOO!<br>")
    $(".jqButton").html ("It is done")
    $(".jqButton").addClass ("buttonFade")
    $(".intro, h2, .newPContent").empty();


});





