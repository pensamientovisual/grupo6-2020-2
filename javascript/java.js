// $(document).ready(function(){
    
//     $("#Metropolitana").click(function(){      
//         var x = document.getElementById("DotMatrixChart");
//         var y = document.getElementById("cuadro")
//         if (x.style.visibility === 'hidden') {
//             x.style.visibility = 'visible';
//             y.style.visibility = "hidden";
//         } else {
//             x.style.visibility = 'hidden';
//             y.style.visibility = 'visible';
//         }  	
//     });

// });
// document.get


var antofagasta =
[
    { group: "Antofagasta" ,category: "Discapacidad Intelectual", count: 1},
    { group: "Antofagasta" ,category: "Problema de Aprendizaje", count: 0},
    { group: "Antofagasta" ,category: "Discapacidad Visual", count: 0},
    { group: "Antofagasta" ,category: "Problemas de audición", count: 3},
]; 
var calama =
[
    { group: "Calama" ,category: "Discapacidad Intelectual", count: 1},
    { group: "Calama" ,category: "Problema de Aprendizaje", count: 0},
    { group: "Calama" ,category: "Discapacidad Visual", count: 0},
    { group: "Calama" ,category: "Problemas de audición", count: 3},
]; 
var mejillones =
[
    { group: "Mejillones" ,category: "Discapacidad Intelectual", count: 1},
    { group: "Mejillones" ,category: "Problema de Aprendizaje", count: 0},
    { group: "Mejillones" ,category: "Discapacidad Visual", count: 0},
    { group: "Mejillones" ,category: "Problemas de audición", count: 3},
]; 

var tocopilla =
[
    { group: "Tocopilla" ,category: "Discapacidad Intelectual", count: 1},
    { group: "Tocopilla" ,category: "Problema de Aprendizaje", count: 0},
    { group: "Tocopilla" ,category: "Discapacidad Visual", count: 0},
    { group: "Tocopilla" ,category: "Problemas de audición", count: 3},
];

TOCOPILLA = filter(region_1, COMUNA == "TOCOPILLA ALMONTE")

table(TOCOPILLA$`Discapacidad Auditiva`)
table(TOCOPILLA$`Discapacidad Intelectual`)
table(TOCOPILLA$`Discapacidad Visual`)
table(TOCOPILLA$Autismo)
table(TOCOPILLA$`Trastornos Específicos del Lenguaje`)
table(TOCOPILLA$`Graves Alteraciones en la Capacidad de Relación y Comunicación`)
table(TOCOPILLA$`Trastornos Motores`)