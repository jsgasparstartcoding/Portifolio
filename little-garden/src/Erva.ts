import { Planta } from "./Planta.js";

export class Erva extends Planta {
  aroma: string;

  constructor(nome: string, especie: string, emoji: string, nivelAgua: number, aroma: string) {
    super(nome, especie, emoji, nivelAgua);
    this.aroma = aroma;
  }

  colher(): string {
    return `${this.emoji} Você colheu ${this.nome} — aroma de ${this.aroma}. 🌿`;
  }

  cuidar(): string {
    return `${this.emoji} ${this.nome} liberou um aroma de ${this.aroma}.`;
  }
}