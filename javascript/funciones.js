function datosregionales(e)
{
	for(var t=e.length,
		n=0,
		i=0;
		i<e.length;
		i++)
		n+=parseInt(e[i].personas);
	document.getElementById("datosregionales_f").innerHTML=n+" personas"

	for(var t=e.length,
		n=0,
		i=0;
		i<e.length;
		i++)
		n+=parseInt(e[i].establecimientos);
	document.getElementById("datosregionales").innerHTML=n+" establecimientos"
}

function region(region)
{
	var svg = document.getElementById(region.id);
	svg.style.fill = "#2a9d8f";
	}

function intelectual(i)
{
	var svg = document.getElementById(i.id);
	document.getElementById("section1").innerHTML="Discapacidades intelectuales"
	}

function motriz(i)
{
	var svg = document.getElementById(i.id);
	document.getElementById("section1").innerHTML="Discapacidades motrices"
	}

function auditiva(i)
{
	var svg = document.getElementById(i.id);
	document.getElementById("section1").innerHTML="Discapacidades auditivas"
	}

function visual(i)
{
	var svg = document.getElementById(i.id);
	document.getElementById("section1").innerHTML="Discapacidades visuales"
	}
	
