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
	document.getElementById("datosregionales").innerHTML=separador(n)+" PeSD"

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
	}

function motriz(i)
{
	var svg = document.getElementById(i.id);
	document.getElementById("section1").innerHTML="Discapacidades motrices:"
	}

function auditiva(i)
{
	var svg = document.getElementById(i.id);
	document.getElementById("section1").innerHTML="Discapacidades auditivas: se considera cuando existe alguna dificultad con escuchar y si esta afecta al desarrollo del lenguaje de la persona."
	}

function visual(i)
{
	var svg = document.getElementById(i.id);
	document.getElementById("section1").innerHTML="Discapacidades visuales: se considera a cualquier alteración del sentido de la vista, pudiendo ser ésta total o parcial."
	}

function separador(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
	
function activa(v)
{
	var x = document.getElementById("DotMatrixChart");
	var y = document.getElementById("cuadro");
	y.style.visibility = "hidden";
	if(v=="2"){
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
	else if(v=="12"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(huechu,chart_options);
	} 
	else if(v=="1"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		x.text('Esta comuna no tiene niguna Escuela Especial');
	} 
	else if(v=="13"){
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(ind,chart_options);
	} 
}  
