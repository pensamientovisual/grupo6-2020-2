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
		document.getElementById("seleccioncomunasI").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasRM").style.visibility = "visible";
	}
	else if (region.id == "Tarapaca") {
		document.getElementById("seleccioncomunasRM").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasII").style.visibility = "hidden";
		document.getElementById("seleccioncomunasI").style.visibility = "visible";
	}
	else if (region.id == "Antofagasta") {
		document.getElementById("seleccioncomunasRM").style.visibility = "hidden";;
		document.getElementById("seleccioncomunasI").style.visibility = "hidden";
		document.getElementById("seleccioncomunasII").style.visibility = "visible";
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

	y.style.visibility = "hidden";
	var txt = document.getElementById("defescuelas");
	txt.style.visibility = "hidden";


}

function pesd() {
	var y = document.getElementById("PeSD");
	y.style.visibility = "visible";

}

function graf() {
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
				data: [1188757, 6893613],
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
