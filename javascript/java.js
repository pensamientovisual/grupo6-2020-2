$(document).ready(function(){
    $("#Metropolitana").click(function(){
        var x = document.getElementById("DotMatrixChart");
        if (x.style.visibility === 'hidden') {
            x.style.visibility = 'visible';
        } else {
            x.style.visibility = 'hidden';
        }  	
    });

});
  