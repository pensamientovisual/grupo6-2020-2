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
	
