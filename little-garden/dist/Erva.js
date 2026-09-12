import { Planta } from "./Planta.js";
export class Erva extends Planta {
    constructor(nome, especie, emoji, nivelAgua, aroma) {
        super(nome, especie, emoji, nivelAgua);
        this.aroma = aroma;
    }
    colher() {
        return `${this.emoji} Você colheu ${this.nome} — aroma de ${this.aroma}. 🌿`;
    }
    cuidar() {
        return `${this.emoji} ${this.nome} liberou um aroma de ${this.aroma}.`;
    }
}
