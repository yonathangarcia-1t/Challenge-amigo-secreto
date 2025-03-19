
let amigos = [];

// funciones
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombreAmigo = input.value.trim();
  
  if (nombreAmigo && !amigos.includes(nombreAmigo)) {
    amigos.push(nombreAmigo);
    actualizarListaAmigos();
    input.value = '';
  } else {
    alert('Por favor, introduce un nombre válido o que no esté ya en la lista.');
  }
}

function actualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';
  
  amigos.forEach((amigo, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${amigo}`;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert('Necesitas al menos 2 amigos para hacer un sorteo.');
    return;
  }
  
  let copiaAmigos = [...amigos];
  let sorteo = {};
  
  amigos.forEach(amigo => {
    const posiblesAmigos = copiaAmigos.filter(a => a !== amigo);
    const amigoSecreto = posiblesAmigos[Math.floor(Math.random() * posiblesAmigos.length)];
    sorteo[amigo] = amigoSecreto;
    copiaAmigos = copiaAmigos.filter(a => a !== amigoSecreto);
  });
  
  mostrarResultadoSorteo(sorteo);
}

function mostrarResultadoSorteo(sorteo) {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  
  for (const [amigo, amigoSecreto] of Object.entries(sorteo)) {
    const li = document.createElement('li');
    li.textContent = `${amigo} ➔ ${amigoSecreto}`;
    resultado.appendChild(li);
  }
}