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
