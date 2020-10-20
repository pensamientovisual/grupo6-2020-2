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

    // Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

