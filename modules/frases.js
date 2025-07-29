// Módulos para Frases

// Este módulo contém uma lista de frases motivacionais e uma função para retornar uma frase aleatória

export const frasesMotivacionais = [
  "A força de vontade deve ser mais forte do que a habilidade. — Muhammad Ali",
  "Não existe grau de dificuldade, apenas grau de comprometimento. — Wictor Magnus",
  "Normalmente as oportunidades estão disfarçadas de trabalho duro, é por isso que a maioria das pessoas não as reconhecem. — Ann Landers",
  "Ganhamos força, coragem e confiança a cada experiência em que verdadeiramente paramos para enfrentar o medo. — Eleanor Roosevelt",
  "Conhecimento não é suficiente; precisamos aplicar. Desejar não é suficiente; precisamos fazer. — Johann Wolfgang Von Goethe",
  "Se você não arriscar nada, você arrisca mais. — Erica Jong",
  "Uma meta é um sonho com um prazo. — Napoleon Hill",
  "Vencer não é tudo, mas querer vencer sim. — Vince Lombardi",
  "A liderança pertence àqueles que a conquistam. — Sheryl Sandberg",
  "Crescimento e conforto não coexistem. — Ginni Rometty"
];

// criando função para retornar uma frase aleatória

// Math.floor() arredonda para baixo, garantindo que o índice seja um número inteiro
//math.random() retorna um número aleatório entre 0 e 1, multiplicamos pelo tamanho do array para obter um índice válido

export function fraseAleatoria() {
  const indice = Math.floor(Math.random() * frasesMotivacionais.length);
  return frasesMotivacionais[indice];
}