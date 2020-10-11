$(document).ready(function(){
    $("#Metropolitana").click(function(){
        var x = document.getElementById("DotMatrixChart");
        var y = document.getElementById("cuadro")
        if (x.style.visibility === 'hidden') {
            x.style.visibility = 'visible';
            y.style.visibility = "hidden";
        } else {
            x.style.visibility = 'hidden';
        }  	
    });

});
  