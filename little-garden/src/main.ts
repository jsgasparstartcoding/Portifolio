import { Planta } from "./Planta.js";
import { Flor }   from "./Flor.js";
import { Erva }   from "./Erva.js";

const jardim: Planta[] = [
  new Flor("Lavanda",  "Lavandula",  "🌷", 70, "roxo"),
  new Flor("Girassol", "Helianthus", "🌻", 40, "amarelo"),
  new Erva("Hortelã",  "Mentha",     "🌿", 100, "menta"),
  new Flor("Jasmim",   "Jasminum",   "🌼", 60, "branco"),
  new Flor("Camomila", "Matricaria", "🌸", 50, "amarelo suave"),
];

const jardimEl   = document.getElementById("jardim") as HTMLElement;
const contadorEl = document.getElementById("contador") as HTMLElement;

function renderizar() {
  jardimEl.innerHTML = "";

  jardim.forEach((planta, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="emoji">${planta.emoji}</div>
      <h2>${planta.nome}</h2>
      <p class="especie"><em>${planta.especie}</em></p>
      <div class="agua">
        <div class="barra">
          <div class="preenchimento" style="width: ${planta.nivelAgua}%"></div>
        </div>
        <span>💧 ${planta.nivelAgua}%</span>
      </div>
      <p class="saude">${planta.verificarSaude()}</p>
      <button data-index="${index}">Regar</button>
    `;
    jardimEl.appendChild(card);
  });

  contadorEl.textContent = `🌱 ${Planta.totalPlantas} plantinhas no jardim`;

  document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = Number((e.target as HTMLElement).dataset.index);
      jardim[idx].regar();
      renderizar();
    });
  });
}

renderizar();