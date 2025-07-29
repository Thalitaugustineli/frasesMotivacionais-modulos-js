import { fraseAleatoria } from './modules/frases.js';

window.exibirFraseMotivacional = () => {
  const frase = fraseAleatoria();
  document.getElementById('frase').textContent = frase;
};