function datosregionales(e) {
	for (var t = e.length,
		n = 0,
		i = 0;
		i < e.length;
		i++)
		n += parseInt(e[i].habitantes);
	document.getElementById("datosregionales_f").innerHTML = separador(n) + " Habitantes en la Región"

	for (var t = e.length,
		n = 0,
		i = 0;
		i < e.length;
		i++)
		n += parseInt(e[i].PeSD);
	document.getElementById("datosregionales").innerHTML = separador(n) + " PeSD*"

	for (var t = e.length,
		n = 0,
		i = 0;
		i < e.length;
		i++)
		n += parseInt(e[i].establecimientos);
	document.getElementById("datosregionales_e").innerHTML = separador(n) + " establecimientos para PeSD"
}

function region(region) {
	var svg = document.getElementById(region.id);
	var z = document.getElementById(contenidoRegion)
	svg.style.fill = "#2a9d8f";
	if (region.id == "Metropolitana") {
		document.getElementById("seleccioncomunasI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVII").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasVIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIX").style.visibility = "hidden";
		document.getElementById("seleccioncomunasX").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXIV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasRM").style.visibility = "visible";
	}
	else if (region.id == "Tarapaca") {
		document.getElementById("seleccioncomunasI").style.visibility = "visible";
		document.getElementById("seleccioncomunasII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVII").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasVIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIX").style.visibility = "hidden";
		document.getElementById("seleccioncomunasX").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXIV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasRM").style.visibility = "hidden";
	}
	else if (region.id == "Antofagasta") {
		document.getElementById("seleccioncomunasI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasII").style.visibility = "visible";
		document.getElementById("seleccioncomunasIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVII").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasVIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIX").style.visibility = "hidden";
		document.getElementById("seleccioncomunasX").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXIV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasRM").style.visibility = "hidden";
	}
	else if (region.id == "Coquimbo") {
		document.getElementById("seleccioncomunasI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIV").style.visibility = "visible";;
		document.getElementById("seleccioncomunasV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVII").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasVIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIX").style.visibility = "hidden";
		document.getElementById("seleccioncomunasX").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXIV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasRM").style.visibility = "hidden";

	}
	else if (region.id == "Valparaiso") {
		document.getElementById("seleccioncomunasI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasV").style.visibility = "visible";
		document.getElementById("seleccioncomunasVI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVII").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasVIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIX").style.visibility = "hidden";
		document.getElementById("seleccioncomunasX").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXIV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasRM").style.visibility = "hidden";

	}
	else if (region.id == "Ohiggins") {
		document.getElementById("seleccioncomunasI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVI").style.visibility = "visible";
		document.getElementById("seleccioncomunasVII").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasVIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIX").style.visibility = "hidden";
		document.getElementById("seleccioncomunasX").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXIV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasRM").style.visibility = "hidden";

	}
	else if (region.id == "Maule") {
		document.getElementById("seleccioncomunasI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVII").style.visibility = "visible";;
		document.getElementById("seleccioncomunasVIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIX").style.visibility = "hidden";
		document.getElementById("seleccioncomunasX").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXIV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasRM").style.visibility = "hidden";

	}
	else if (region.id == "BioBio") {
		document.getElementById("seleccioncomunasI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVII").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasVIII").style.visibility = "visible";
		document.getElementById("seleccioncomunasIX").style.visibility = "hidden";
		document.getElementById("seleccioncomunasX").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXIV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasRM").style.visibility = "hidden";

	}
	else if (region.id == "Araucania") {
		document.getElementById("seleccioncomunasI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVII").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasVIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIX").style.visibility = "visible";
		document.getElementById("seleccioncomunasX").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXIV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasRM").style.visibility = "hidden";

	}
	else if (region.id == "Los_Rios") {
		document.getElementById("seleccioncomunasI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVII").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasVIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIX").style.visibility = "hidden";
		document.getElementById("seleccioncomunasX").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXIV").style.visibility = "visible";
		document.getElementById("seleccioncomunasRM").style.visibility = "hidden";

	}
	else if (region.id == "Los_Lagos") {
		document.getElementById("seleccioncomunasI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVII").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasVIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIX").style.visibility = "hidden";
		document.getElementById("seleccioncomunasX").style.visibility = "visible";;
		document.getElementById("seleccioncomunasXI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXIV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasRM").style.visibility = "hidden";

	}
	else if (region.id == "Aisen") {
		document.getElementById("seleccioncomunasI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVII").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasVIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIX").style.visibility = "hidden";
		document.getElementById("seleccioncomunasX").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXI").style.visibility = "visible";
		document.getElementById("seleccioncomunasXII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXIV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasRM").style.visibility = "hidden";

	}
	else if (region.id == "Magallanes") {
		document.getElementById("seleccioncomunasI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVII").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasVIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIX").style.visibility = "hidden";
		document.getElementById("seleccioncomunasX").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXII").style.visibility = "visible";
		document.getElementById("seleccioncomunasXV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXIV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasRM").style.visibility = "hidden";

	}
	else if (region.id == "Arica") {
		document.getElementById("seleccioncomunasI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIV").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasVII").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasVIII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasIX").style.visibility = "hidden";
		document.getElementById("seleccioncomunasX").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasXI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasXV").style.visibility = "visible";;
		document.getElementById("seleccioncomunasXIV").style.visibility = "hidden";
		document.getElementById("seleccioncomunasRM").style.visibility = "hidden";

	}

}

function intelectual(i) {
	var svg = document.getElementById(i.id);
	document.getElementById("txticonos").innerHTML = "Discapacidades intelectuales: Se caracteriza por limitaciones significativas en el funcionamiento intelectual y en la conducta adaptativa, las cuales se manifiestan durante el periodo del desarrollo humano, viendose afectadas las habilidades sociales y prácticas. (neuronup, 2014)"
	document.getElementById("txticonos").style.top = "160px";
}

function motriz(i)   // NO TOQUE EL NOMBRE DE LA FUNCION POR ESO SON DISTINTOS 
{
	var svg = document.getElementById(i.id);
	document.getElementById("txticonos").innerHTML = "Discapacidades de aprendizaje: son trastornos que afectan la capacidad de entender o usar el lenguaje hablado o escrito, hacer operaciones matemáticas, coordinar los movimientos o dirigir la atención. (NIH, 2016)"
	document.getElementById("txticonos").style.top = "300px";
}

function auditiva(i) {
	var svg = document.getElementById(i.id);
	document.getElementById("txticonos").innerHTML = "Discapacidades auditivas: se considera cuando existe alguna dificultad con escuchar y si esta afecta al desarrollo del lenguaje de la persona. (MINEDUC, 2007)"
	document.getElementById("txticonos").style.top = "430px";
}

function visual(i) {
	var svg = document.getElementById(i.id);
	document.getElementById("txticonos").innerHTML = "Discapacidades visuales: se considera a cualquier alteración del sentido de la vista, pudiendo ser ésta total o parcial. (MINEDUC, 2007)"
	document.getElementById("txticonos").style.top = "570px";
}

function separador(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function activa(v) {
	var x = document.getElementById("DotMatrixChart");
	var y = document.getElementById("cuadro");

	if (v == "1") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "2") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(buin, chart_options);

	}
	else if (v == "3") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(calera, chart_options);

	}
	else if (v == "4") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(cerrillos, chart_options);
	}
	else if (v == "5") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(cerro, chart_options);
	}
	else if (v == "6") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(colina, chart_options);
	}
	else if (v == "7") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(conchali, chart_options);
	}
	else if (v == "8") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(curacavi, chart_options);
	}
	else if (v == "9") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(bosque, chart_options);
	}
	else if (v == "10") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(monte, chart_options);
	}
	else if (v == "11") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(central, chart_options);
	}
	else if (v == "12") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(huechu, chart_options);
	}

	else if (v == "13") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(ind, chart_options);
	}
	else if (v == "14") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(isla, chart_options);
	}
	else if (v == "15") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(lacisterna, chart_options);
	}
	else if (v == "16") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(laflorida, chart_options);
	}
	else if (v == "17") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(lagranja, chart_options);
	}
	else if (v == "18") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(lapintana, chart_options);
	}
	else if (v == "19") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(lareina, chart_options);
	}
	else if (v == "20") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(lampa, chart_options);
	}
	else if (v == "21") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(lascondes, chart_options);
	}
	else if (v == "22") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(lobarnechea, chart_options);
	}
	else if (v == "23") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(loespejo, chart_options);
	}
	else if (v == "24") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(loprado, chart_options);
	}
	else if (v == "25") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(macul, chart_options);
	}
	else if (v == "26") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(maipu, chart_options);
	}
	else if (v == "27") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(mariapinto, chart_options);
	}
	else if (v == "28") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(melipilla, chart_options);
	}
	else if (v == "29") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(ñuñoa, chart_options);
	}
	else if (v == "30") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(padrehurtado, chart_options);
	}
	else if (v == "31") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(paine, chart_options);
	}
	else if (v == "32") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(pac, chart_options);
	}
	else if (v == "33") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(peñaflor, chart_options);
	}
	else if (v == "34") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(peñalolen, chart_options);
	}
	else if (v == "35") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(pirque, chart_options);
	}
	else if (v == "36") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(providencia, chart_options);
	}
	else if (v == "37") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(pudahuel, chart_options);
	}
	else if (v == "38") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(puentealto, chart_options);
	}
	else if (v == "39") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(quilicura, chart_options);
	}
	else if (v == "40") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(quintanormal, chart_options);
	}
	else if (v == "41") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(recoleta, chart_options);
	}
	else if (v == "42") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(renca, chart_options);
	}
	else if (v == "43") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(sanbernardo, chart_options);
	}
	else if (v == "44") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(sanjoaquin, chart_options);
	}
	else if (v == "45") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(sanjose, chart_options);
	}
	else if (v == "46") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(sanmiguel, chart_options);
	}
	else if (v == "47") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(sanpedro, chart_options);
	}
	else if (v == "48") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(sanramon, chart_options);
	}
	else if (v == "49") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(santiago, chart_options);
	}
	else if (v == "50") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(talagante, chart_options);
	}
	else if (v == "51") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(tiltil, chart_options);
	}
	else if (v == "52") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(vitacura, chart_options);
	}
	else if (v == "53") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "54") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(alto, chart_options);
	}
	else if (v == "55") {
		x.innerHTML = "";
		DotMatrixChart(iquique, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "56") {
		x.innerHTML = "";
		DotMatrixChart(pica, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "57") {
		x.innerHTML = "";
		DotMatrixChart(pozo, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "58") {
		x.innerHTML = "";
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		DotMatrixChart(antofagasta, chart_options);
	}
	else if (v == "59") {
		x.innerHTML = "";
		DotMatrixChart(calama, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "60") {
		x.innerHTML = "";
		DotMatrixChart(mejillones, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "61") {
		x.innerHTML = "";
		DotMatrixChart(tocopilla, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "62") {
		x.innerHTML = "";
		DotMatrixChart(caldera, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "63") {
		x.innerHTML = "";
		DotMatrixChart(chañaral, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "64") {
		x.innerHTML = "";
		DotMatrixChart(copiapo, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "65") {
		x.innerHTML = "";
		DotMatrixChart(diego, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "66") {
		x.innerHTML = "";
		DotMatrixChart(huasco, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "67") {
		x.innerHTML = "";
		DotMatrixChart(tierra, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "68") {
		x.innerHTML = "";
		DotMatrixChart(vallenar, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "69") {
		x.innerHTML = "";
		DotMatrixChart(andacollo, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "70") {
		x.innerHTML = "";
		DotMatrixChart(combarbala, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "71") {
		x.innerHTML = "";
		DotMatrixChart(coquimbo, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "72") {
		x.innerHTML = "";
		DotMatrixChart(illapel, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "73") {
		x.innerHTML = "";
		DotMatrixChart(laserena, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "74") {
		x.innerHTML = "";
		DotMatrixChart(losvilos, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "75") {
		x.innerHTML = "";
		DotMatrixChart(montepatria, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "76") {
		x.innerHTML = "";
		DotMatrixChart(ovalle, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "77") {
		x.innerHTML = "";
		DotMatrixChart(punitaqui, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "78") {
		x.innerHTML = "";
		DotMatrixChart(salamanca, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "79") {
		x.innerHTML = "";
		DotMatrixChart(vicuña, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "80") {
		x.innerHTML = "";
		DotMatrixChart(cabildo, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "81") {
		x.innerHTML = "";
		DotMatrixChart(callelarga, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "82") {
		x.innerHTML = "";
		DotMatrixChart(cartagena, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "83") {
		x.innerHTML = "";
		DotMatrixChart(casablanca, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "84") {
		x.innerHTML = "";
		DotMatrixChart(catemu, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "85") {
		x.innerHTML = "";
		DotMatrixChart(concon, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "86") {
		x.innerHTML = "";
		DotMatrixChart(elquisco, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "87") {
		x.innerHTML = "";
		DotMatrixChart(eltabo, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "88") {
		x.innerHTML = "";
		DotMatrixChart(hijuelas, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "89") {
		x.innerHTML = "";
		DotMatrixChart(lacalera, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "90") {
		x.innerHTML = "";
		DotMatrixChart(laligua, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "91") {
		x.innerHTML = "";
		DotMatrixChart(limache, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "92") {
		x.innerHTML = "";
		DotMatrixChart(llaillay, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "93") {
		x.innerHTML = "";
		DotMatrixChart(losandes, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "94") {
		x.innerHTML = "";
		DotMatrixChart(nogales, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "95") {
		x.innerHTML = "";
		DotMatrixChart(panquehue, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "96") {
		x.innerHTML = "";
		DotMatrixChart(petorca, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "97") {
		x.innerHTML = "";
		DotMatrixChart(puchuncavi, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "98") {
		x.innerHTML = "";
		DotMatrixChart(putaendo, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "99") {
		x.innerHTML = "";
		DotMatrixChart(quilpue, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "100") {
		x.innerHTML = "";
		DotMatrixChart(quintero, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "101") {
		x.innerHTML = "";
		DotMatrixChart(rinconada,chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "102") {
		x.innerHTML = "";
		DotMatrixChart(sanantonio, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "103") {
		x.innerHTML = "";
		DotMatrixChart(sanesteban, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "104") {
		x.innerHTML = "";
		DotMatrixChart(sanfelipe, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "105") {
		x.innerHTML = "";
		DotMatrixChart(santamaria, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "106") {
		x.innerHTML = "";
		DotMatrixChart(valparaiso, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "107") {
		x.innerHTML = "";
		DotMatrixChart(villaalemana, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "108") {
		x.innerHTML = "";
		DotMatrixChart(viñadelmar, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "109") {
		x.innerHTML = "";
		DotMatrixChart(chepica, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "110") {
		x.innerHTML = "";
		DotMatrixChart(chimbarongo, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "111") {
		x.innerHTML = "";
		DotMatrixChart(codegua, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "112") {
		x.innerHTML = "";
		DotMatrixChart(coltauco, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "113") {
		x.innerHTML = "";
		DotMatrixChart(doñihue, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "114") {
		x.innerHTML = "";
		DotMatrixChart(graneros, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "115") {
		x.innerHTML = "";
		DotMatrixChart(lascabras, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "116") {
		x.innerHTML = "";
		DotMatrixChart(litueche, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "117") {
		x.innerHTML = "";
		DotMatrixChart(lolol, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "118") {
		x.innerHTML = "";
		DotMatrixChart(machali, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "119") {
		x.innerHTML = "";
		DotMatrixChart(malloa, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "120") {
		x.innerHTML = "";
		DotMatrixChart(marchihue, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "121") {
		x.innerHTML = "";
		DotMatrixChart(mostazal, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
		
	}
	else if (v == "122") {
		x.innerHTML = "";
		DotMatrixChart(nancagua, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "123") {
		x.innerHTML = "";
		DotMatrixChart(olivar, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "124") {
		x.innerHTML = "";
		DotMatrixChart(palmilla, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "125") {
		x.innerHTML = "";
		DotMatrixChart(paredones, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "126") {
		x.innerHTML = "";
		DotMatrixChart(peralillo, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "127") {
		x.innerHTML = "";
		DotMatrixChart(peumo, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "128") {
		x.innerHTML = "";
		DotMatrixChart(pichidegua, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "129") {
		x.innerHTML = "";
		DotMatrixChart(pichilemu, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "130") {
		x.innerHTML = "";
		DotMatrixChart(placilla, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "131") {
		x.innerHTML = "";
		DotMatrixChart(quintadetilcoco, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "132") {
		x.innerHTML = "";
		DotMatrixChart(rancagua, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "133") {
		x.innerHTML = "";
		DotMatrixChart(rengo, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "134") {
		x.innerHTML = "";
		DotMatrixChart(requinoa, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "135") {
		x.innerHTML = "";
		DotMatrixChart(sanfernando, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "136") {
		x.innerHTML = "";
		DotMatrixChart(sanfelipe, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "137") {
		x.innerHTML = "";
		DotMatrixChart(sanvicente, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "138") {
		x.innerHTML = "";
		DotMatrixChart(santacruz, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "139") {
		x.innerHTML = "";
		DotMatrixChart(cauquenes, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
	}
	else if (v == "140") {
		x.innerHTML = "";
		DotMatrixChart(chanco, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "141") {
		x.innerHTML = "";
		DotMatrixChart(colbun, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "142") {
		x.innerHTML = "";
		DotMatrixChart(constitucion, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "143") {
		x.innerHTML = "";
		DotMatrixChart(curepto, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "145") {
		x.innerHTML = "";
		DotMatrixChart(curico, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "146") {
		x.innerHTML = "";
		DotMatrixChart(hualañe, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "147") {
		x.innerHTML = "";
		DotMatrixChart(licantén, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "148") {
		x.innerHTML = "";
		DotMatrixChart(linares, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "149") {
		x.innerHTML = "";
		DotMatrixChart(longavi, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "150") {
		x.innerHTML = "";
		DotMatrixChart(maule, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "151") {
		x.innerHTML = "";
		DotMatrixChart(molina, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "152") {
		x.innerHTML = "";
		DotMatrixChart(parral, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "153") {
		x.innerHTML = "";
		DotMatrixChart(pelarco, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "154") {
		x.innerHTML = "";
		DotMatrixChart(pencahue, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "155") {
		x.innerHTML = "";
		DotMatrixChart(rauco, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "156") {
		x.innerHTML = "";
		DotMatrixChart(retiro, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "157") {
		x.innerHTML = "";
		DotMatrixChart(romeral, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "158") {
		x.innerHTML = "";
		DotMatrixChart(sagradafamilia, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "159") {
		x.innerHTML = "";
		DotMatrixChart(sanclemente, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "160") {
		x.innerHTML = "";
		DotMatrixChart(sanjavier, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "161") {
		x.innerHTML = "";
		DotMatrixChart(sanrafael, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "162") {
		x.innerHTML = "";
		DotMatrixChart(talca, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "163") {
		x.innerHTML = "";
		DotMatrixChart(teno, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "164") {
		x.innerHTML = "";
		DotMatrixChart(villaalregre, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "165") {
		x.innerHTML = "";
		DotMatrixChart(yerbasbuenas, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "166") {
		x.innerHTML = "";
		DotMatrixChart(arauco, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "167") {
		x.innerHTML = "";
		DotMatrixChart(bulnes, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "168") {
		x.innerHTML = "";
		DotMatrixChart(cabrero, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "169") {
		x.innerHTML = "";
		DotMatrixChart(cañete, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "170") {
		x.innerHTML = "";
		DotMatrixChart(chiguayante, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "171") {
		x.innerHTML = "";
		DotMatrixChart(chillan, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "172") {
		x.innerHTML = "";
		DotMatrixChart(chillanviejo, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "173") {
		x.innerHTML = "";
		DotMatrixChart(cobquecura, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
	}
	else if (v == "174") {
		x.innerHTML = "";
		DotMatrixChart(coelemu, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "175") {
		x.innerHTML = "";
		DotMatrixChart(coihueco, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "176") {
		x.innerHTML = "";
		DotMatrixChart(concepcion, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "177") {
		x.innerHTML = "";
		DotMatrixChart(coronel, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "178") {
		x.innerHTML = "";
		DotMatrixChart(curanilahue, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "179") {
		x.innerHTML = "";
		DotMatrixChart(elcarmen, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "180") {
		x.innerHTML = "";
		DotMatrixChart(florida, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";

	}
	else if (v == "181") {
		x.innerHTML = "";
		DotMatrixChart(hualpen, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
	}
	else if (v == "182") {
		x.innerHTML = "";
		DotMatrixChart(hualqui, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";
	}
	else if (v == "183") {
		x.innerHTML = "";
		DotMatrixChart(laja, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "184") {
		x.innerHTML = "";
		DotMatrixChart(lebu, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "185") {
		x.innerHTML = "";
		DotMatrixChart(losalamos, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "186") {
		x.innerHTML = "";
		DotMatrixChart(losangeles, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "187") {
		x.innerHTML = "";
		DotMatrixChart(lota, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "188") {
		x.innerHTML = "";
		DotMatrixChart(hulchen, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "189") {
		x.innerHTML = "";
		DotMatrixChart(nacimiento, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "190") {
		x.innerHTML = "";
		DotMatrixChart(negrete, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "191") {
		x.innerHTML = "";
		DotMatrixChart(ñiquen, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "192") {
		x.innerHTML = "";
		DotMatrixChart(pemuco, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "193") {
		x.innerHTML = "";
		DotMatrixChart(penco, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "194") {
		x.innerHTML = "";
		DotMatrixChart(pinto, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "195") {
		x.innerHTML = "";
		DotMatrixChart(quilaco, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "196") {
		x.innerHTML = "";
		DotMatrixChart(quilleco, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "197") {
		x.innerHTML = "";
		DotMatrixChart(quillon, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "198") {
		x.innerHTML = "";
		DotMatrixChart(quirihue, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "199") {
		x.innerHTML = "";
		DotMatrixChart(ranquil, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "200") {
		x.innerHTML = "";
		DotMatrixChart(sancarlos, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "201") {
		x.innerHTML = "";
		DotMatrixChart(sanignacion, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "202") {
		x.innerHTML = "";
		DotMatrixChart(sannicolas, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "203") {
		x.innerHTML = "";
		DotMatrixChart(sanpedrodelapaz, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "204") {
		x.innerHTML = "";
		DotMatrixChart(sanrosendo, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "205") {
		x.innerHTML = "";
		DotMatrixChart(santabarbara, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "206") {
		x.innerHTML = "";
		DotMatrixChart(santajuana, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "207") {
		x.innerHTML = "";
		DotMatrixChart(talcahuano, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "208") {
		x.innerHTML = "";
		DotMatrixChart(tome, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "209") {
		x.innerHTML = "";
		DotMatrixChart(treguaco, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "210") {
		x.innerHTML = "";
		DotMatrixChart(tucapel, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "211") {
		x.innerHTML = "";
		DotMatrixChart(yumbel, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "212") {
		x.innerHTML = "";
		DotMatrixChart(yungay, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "238") {
		x.innerHTML = "";
		DotMatrixChart(ancud, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "239") {
		x.innerHTML = "";
		DotMatrixChart(calbuco, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "240") {
		x.innerHTML = "";
		DotMatrixChart(castro, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "241") {
		x.innerHTML = "";
		DotMatrixChart(chonchi, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "242") {
		x.innerHTML = "";
		DotMatrixChart(dalcahue, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "243") {
		x.innerHTML = "";
		DotMatrixChart(fresia, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "244") {
		x.innerHTML = "";
		DotMatrixChart(frutillar, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "245") {
		x.innerHTML = "";
		DotMatrixChart(llanquihue, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "246") {
		x.innerHTML = "";
		DotMatrixChart(losmuermos, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "247") {
		x.innerHTML = "";
		DotMatrixChart(maullin, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "248") {
		x.innerHTML = "";
		DotMatrixChart(osorno, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "249") {
		x.innerHTML = "";
		DotMatrixChart(puertomontt, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "250") {
		x.innerHTML = "";
		DotMatrixChart(puertovaras, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "251") {
		x.innerHTML = "";
		DotMatrixChart(purranque, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "252") {
		x.innerHTML = "";
		DotMatrixChart(puyehue, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "253") {
		x.innerHTML = "";
		DotMatrixChart(quellon, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "254") {
		x.innerHTML = "";
		DotMatrixChart(quinchao, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "255") {
		x.innerHTML = "";
		DotMatrixChart(rionegro, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "256") {
		x.innerHTML = "";
		DotMatrixChart(sanpablo, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "213") {
		x.innerHTML = "";
		DotMatrixChar(angol, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "214") {
		x.innerHTML = "";
		DotMatrixChart(carahue, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "215") {
		x.innerHTML = "";
		DotMatrixChart(cholchol, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}

	}
	else if (v == "216") {
		x.innerHTML = "";
		DotMatrixChart(collipulli, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "217") {
		x.innerHTML = "";
		DotMatrixChart(curacautin, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "218") {
		x.innerHTML = "";
		DotMatrixChart(freire, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "219") {
		x.innerHTML = "";
		DotMatrixChart(galvarino, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "220") {
		x.innerHTML = "";
		DotMatrixChart(gorbea, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "221") {
		x.innerHTML = "";
		DotMatrixChart(lautaro, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "222") {
		x.innerHTML = "";
		DotMatrixChart(loncoche, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "223") {
		x.innerHTML = "";
		DotMatrixChart(lonquimay, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "224") {
		x.innerHTML = "";
		DotMatrixChart(lossacuces, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "225") {
		x.innerHTML = "";
		DotMatrixChart(nuevaimperial, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "226") {
		x.innerHTML = "";
		DotMatrixChart(padrelascasas, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "227") {
		x.innerHTML = "";
		DotMatrixChart(pitrufquén, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "228") {
		x.innerHTML = "";
		DotMatrixChart(puren, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "229") {
		x.innerHTML = "";
		DotMatrixChart(renaico, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "230") {
		x.innerHTML = "";
		DotMatrixChartr(temuco, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "231") {
		x.innerHTML = "";
		DotMatrixChart(tolten, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "232") {
		x.innerHTML = "";
		DotMatrixChart(traiguen, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "233") {
		x.innerHTML = "";
		DotMatrixChart(victoria, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "234") {
		x.innerHTML = "";
		DotMatrixChart(vilcun, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "235") {
		x.innerHTML = "";
		DotMatrixChart(villarrica, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "236") {
		x.innerHTML = "";
		DotMatrixChart(aysen, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "237") {
		x.innerHTML = "";
		DotMatrixChart(coyhaique, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "257") {
		x.innerHTML = "";
		DotMatrixChart(natales, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}

	}
	else if (v == "258") {
		x.innerHTML = "";
		DotMatrixChart(porvenir, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "259") {
		x.innerHTML = "";
		DotMatrixChart(puntaarenas, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "260") {
		x.innerHTML = "";
		DotMatrixChart(futrono, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "261") {
		x.innerHTML = "";
		DotMatrixChart(launion, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "262") {
		x.innerHTML = "";
		DotMatrixChart(lanco, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "263") {
		x.innerHTML = "";
		DotMatrixChart(loslagos, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "264") {
		x.innerHTML = "";
		DotMatrixChart(mafil, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "265") {
		x.innerHTML = "";
		DotMatrixChart(mariquina, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "266") {
		x.innerHTML = "";
		DotMatrixChart(paillaco, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "267") {
		x.innerHTML = "";
		DotMatrixChart(panguipulli, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "268") {
		x.innerHTML = "";
		DotMatrixChart(riobueno, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	else if (v == "269") {
		x.innerHTML = "";
		DotMatrixChart(Valdivia, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}

	}
	else if (v == "270") {
		x.innerHTML = "";
		DotMatrixChart(arica, chart_options);
		// x.innerHTML = "<div id=\"DotMatrixChart\"></div>";}
	}
	y.style.visibility = "hidden";
	var txt = document.getElementById("defescuelas");
	txt.style.visibility = "hidden";


}

function pesd() {
	var y = document.getElementById("PeSD");
	y.style.visibility = "visible";

}

function graf(PeSD,PsSD) {
	var ctx = document.getElementById("myChart").getContext('2d');
	var chart = new Chart(ctx, {
		// The type of chart we want to create
		type: 'doughnut',

		// The data for our dataset
		data: {
			labels: ["PeSD", "PsSD"],
			datasets: [{
				label: 'RM',
				backgroundColor: ['#264653', "#4188a4"],
				data: [PeSD, PsSD],
				borderColor: "transparent",

			}]
		},

		// Configuration options go here
		options: {
			circumference: 2 * Math.PI,
			rotation: 1 * Math.PI,
			cutoutPercentage: 90,

			legend: { display: false },
		}
	});

	document.getElementById('porcen').innerHTML = "17.2%";
	document.getElementById('txtgrafico').innerHTML = "de PeSD tienen acceso a educación diferenciada";

};
