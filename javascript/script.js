    function nombreRegion(nombre)
    {
        document.getElementById('nom_Region').style.display = 'block';
        document.getElementById('nom_Region').innerHTML = nombre;
        document.getElementById('datosregionales').style.display = 'block';
        document.getElementById('datosregionales_f').style.display = 'block';
        document.getElementById('datosregionales_e').style.display = 'block';
    }
    
        function mostrarProyecto()
    {
            switch (nombre_region)
            {
            case 'Arica':
                nombreRegion('Región de Arica y Parinacota');
                break;
            case 'Tarapaca':
                nombreRegion('Región de Tarapacá');
                break;
            case 'Antofagasta':
                nombreRegion('Región de Antofagasta');
                break;
            case 'Atacama':
                nombreRegion('Región de Atacama');
                break;
            case 'Coquimbo':
                nombreRegion('Región de Coquimbo');
                break;
            case 'Valparaiso':
                nombreRegion('Región de Valparaiso');
                break;
            case 'Metropolitana':
                nombreRegion('Región Metropolitana');
                break;
            case 'Ohiggins':
                nombreRegion("Región de O'higgins");
                break;
            case 'Maule':
                nombreRegion("Región del Maule");
                break;
            case 'Bio-Bio':
                nombreRegion("Región del Biobío");
                break;
            case 'Araucania':
                nombreRegion("Región de La Araucanía");
                break;
            case 'LosRios':
                nombreRegion("Región de Los Rios");
                break;
            case 'LosLagos':
                nombreRegion("Región de Los Lagos");
                break;
            case 'Aysen':
                nombreRegion("Región de Aysén");
                break;
            case 'Magallanes':
                nombreRegion("Región de Magallanes");
                break;
            }
    }
    