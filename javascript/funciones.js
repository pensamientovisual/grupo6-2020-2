function datosregionales(e)
{
	for(var t=e.length,
		n=0,
		i=0;
		i<e.length;
		i++)
		n+=parseInt(e[i].habitantes);
	document.getElementById("datosregionales_f").innerHTML=separador(n)+" Habitantes en la Región"

	for(var t=e.length,
		n=0,
		i=0;
		i<e.length;
		i++)
		n+=parseInt(e[i].PeSD);
	document.getElementById("datosregionales").innerHTML=separador(n)+" PeSD*"

	for(var t=e.length,
		n=0,
		i=0;
		i<e.length;
		i++)
		n+=parseInt(e[i].establecimientos);
	document.getElementById("datosregionales_e").innerHTML=separador(n)+" establecimientos para PeSD"
}

function region(region)
{
	var svg = document.getElementById(region.id);
	svg.style.fill = "#2a9d8f";
	if(region.id == "Metropolitana") {
		document.getElementById("seleccioncomunas").style.visibility = "visible"
	}
	}

function intelectual(i)
{
	var svg = document.getElementById(i.id);
	document.getElementById("section1").innerHTML="Discapacidades intelectuales: se caracteriza por la presentación de limitaciones significativas para el buen funcionamiento en la vida diaria, así como para la comprensión e interacción con el entorno"
	document.getElementById("section1").style.top = "270px";
}

function motriz(i)   // NO TOQUE EL NOMBRE DE LA FUNCION POR ESO SON DISTINTOS 
{
	var svg = document.getElementById(i.id);
	document.getElementById("section1").innerHTML="Discapacidades de aprendizaje: son trastornos que afectan la capacidad de entender o usar el lenguaje hablado o escrito, hacer operaciones matemáticas, coordinar los movimientos o dirigir la atención."
	document.getElementById("section1").style.top = "360px";
}

function auditiva(i)
{
	var svg = document.getElementById(i.id);
	document.getElementById("section1").innerHTML="Discapacidades auditivas: se considera cuando existe alguna dificultad con escuchar y si esta afecta al desarrollo del lenguaje de la persona."
	document.getElementById("section1").style.top = "446px";	
}

function visual(i)
{
	var svg = document.getElementById(i.id);
	document.getElementById("section1").innerHTML="Discapacidades visuales: se considera a cualquier alteración del sentido de la vista, pudiendo ser ésta total o parcial."
	document.getElementById("section1").style.top = "540px";	
}

function separador(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
	
function activa(v)
{
	var x = document.getElementById("DotMatrixChart");
	var y = document.getElementById("cuadro");
	y.style.visibility = "hidden";
	if(v=="1"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	} 
	else if(v=="2"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(buin,chart_options);
		
	}   
	else if(v=="3"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(calera,chart_options);
		
	} 
	else if(v=="4"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(cerrillos,chart_options);
	} 
	else if(v=="5"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(cerro,chart_options);
	} 
	else if(v=="6"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(colina,chart_options);
	} 
	else if(v=="7"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(conchali,chart_options);
	} 
	else if(v=="8"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(curacavi,chart_options);
	} 
	else if(v=="9"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(bosque,chart_options);
	} 
	else if(v=="10"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(monte,chart_options);
	}
	else if(v=="11"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(central,chart_options); 
	}
	else if(v=="12"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(huechu,chart_options);
	} 
	
	else if(v=="13"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(ind,chart_options);
	} 
	else if(v=="14"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(isla,chart_options);
	}
	else if(v=="15"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(lacisterna,chart_options);
	}
	else if(v=="16"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(laflorida,chart_options);
	}
	else if(v=="17"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(lagranja,chart_options);
	}
	else if(v=="18"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(lapintana,chart_options);
	}
	else if(v=="19"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(lareina,chart_options);
	}
	else if(v=="20"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(lampa,chart_options);
	}
	else if(v=="21"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(lascondes,chart_options);
	}
	else if(v=="22"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(lobarnechea,chart_options);
	}
	else if(v=="23"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(loespejo,chart_options);
	}
	else if(v=="24"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(loprado,chart_options);
	}
	else if(v=="25"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(macul,chart_options);
	}
	else if(v=="26"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(maipu,chart_options);
	}
	else if(v=="27"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(mariapinto,chart_options);
	}
	else if(v=="28"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(melipilla,chart_options);
	}
	else if(v=="29"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(ñuñoa,chart_options);
	}
	else if(v=="30"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(padrehurtado,chart_options);
	}
	else if(v=="31"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(paine,chart_options);
	}
	else if(v=="32"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(pac,chart_options);
	}
	else if(v=="33"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(peñaflor,chart_options);
	}
	else if(v=="34"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(peñalolen,chart_options);
	}
	else if(v=="35"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(pirque,chart_options);
	}
	else if(v=="36"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(providencia,chart_options);
	}
	else if(v=="37"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(pudahuel,chart_options);
	}
	else if(v=="38"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(puentealto,chart_options);
	}
	else if(v=="39"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(quilicura,chart_options);
	}
	else if(v=="40"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(quintanormal,chart_options);
	}
	else if(v=="41"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(recoleta,chart_options);
	}
	else if(v=="42"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(renca,chart_options);
	}
	else if(v=="43"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(sanbernardo,chart_options);
	}
	else if(v=="44"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(sanjoaquin,chart_options);
	}
	else if(v=="45"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(sanjose,chart_options);
	}
	else if(v=="46"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(sanmiguel,chart_options);
	}
	else if(v=="47"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(sanpedro,chart_options);
	} 
	else if(v=="48"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(sanramon,chart_options);
	}
	else if(v=="49"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(santiago,chart_options);
	}
	else if(v=="50"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(talagante,chart_options);
	}
	else if(v=="51"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(tiltil,chart_options);
	}
	else if(v=="52"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(vitacura,chart_options);
	}
	else if(v=="53"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		
	} 
	

}  

function pesd(){
	var y = document.getElementById("PeSD");
	y.style.visibility = "visible";
	
}

function graf(){
	var ctx = document.getElementById("myChart").getContext('2d');
	var chart = new Chart(ctx, {
	// The type of chart we want to create
		type: 'doughnut',

	// The data for our dataset
		data: {
			labels: ["PeSD","PsSD"],
			datasets: [{
				label: 'RM',
				backgroundColor: ['#264653',"#4188a4"],
				data: [1188757, 6893613],
				borderColor: "transparent",
				
			}]
		},

	// Configuration options go here
		options: {
			circumference: 2 * Math.PI,
			rotation: 1 * Math.PI,
			cutoutPercentage: 90,
			
			legend:{display:false},
		}
	});
	document.getElementById('porcen').innerHTML = "17.2%";

};
