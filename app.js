const text =
"Te amo muchísimo mi niña";
let index = 0;
const typing = document.getElementById("typing");

(function type() {
  if (index < text.length) {
    typing.textContent += text[index++];
    setTimeout(type, 55);
  }
})();

/* ===== GENERADOR DE PARTICULAS ===== */
function createParticle(type) {
  const p = document.createElement("div");
  p.classList.add("particle");

  const size = Math.random() * 10 + 10;
  const duration = Math.random() * 5 + 6;
  const xMove = Math.random() * 80 - 40 + "px";

  p.style.left = Math.random() * 100 + "vw";
  p.style.fontSize = size + "px";
  p.style.animationDuration = duration + "s";
  p.style.setProperty("--x-move", xMove);
  p.style.animationName = "fall";

  if (type === "snow") {
    p.classList.add("snow");
    p.textContent = "❄";
  } else {
    p.classList.add("rain-heart");
    p.textContent = "❤️";
  }

  document.body.appendChild(p);
  setTimeout(() => p.remove(), duration * 1000);
}

/* ===== LLUVIA ===== */
setInterval(() => createParticle("snow"), 180);   // nieve fondo
setInterval(() => createParticle("snow"), 350);   // nieve frontal
setInterval(() => createParticle("heart"), 900);  // corazones

/* ===== LUCES DEL ARBOL (VISIBLES Y SOLIDAS) ===== */
const tree = document.querySelector(".tree");

function addLights(count, topStart, topEnd, maxWidth) {
  for (let i = 0; i < count; i++) {
    const light = document.createElement("div");
    light.className = "light";

    // colores navideños sólidos
    const colors = ["#ffd700", "#ff3b3b", "#ff8c00", "#ffffff"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    light.style.backgroundColor = color;
    light.style.color = color; // para el glow
    light.style.animationDelay = Math.random() * 1.5 + "s";

    // posición vertical dentro del árbol
    const top = Math.random() * (topEnd - topStart) + topStart;

    // ancho real del triángulo según la altura
    const halfWidth = maxWidth * (top / maxWidth) * 0.8;
const left = Math.random() * (halfWidth * 2) - halfWidth;


    light.style.top = `${top}px`;
    light.style.left = `${left}px`;

    tree.appendChild(light);
  }
}

/* Capa superior */
addLights(8, 8, 35, 70);

/* Capa media */
addLights(14, 40, 75, 90);

/* Capa inferior */
addLights(18, 80, 115, 120);
