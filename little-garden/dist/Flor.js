import { Planta } from "./Planta.js";
export class Flor extends Planta {
    constructor(nome, especie, emoji, nivelAgua, cor) {
        super(nome, especie, emoji, nivelAgua);
        this.cor = cor;
    }
    florescer() {
        return `${this.emoji} ${this.nome} está florescendo em ${this.cor}! 🌸`;
    }
    cuidar() {
        return `${this.emoji} ${this.nome} floresceu com o seu cuidado!`;
    }
}
