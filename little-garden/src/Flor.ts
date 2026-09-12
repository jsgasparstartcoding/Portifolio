import { Planta } from "./Planta.js";

export class Flor extends Planta {
  cor: string;

  constructor(nome: string, especie: string, emoji: string, nivelAgua: number, cor: string) {
    super(nome, especie, emoji, nivelAgua);
    this.cor = cor;
  }

  florescer(): string {
    return `${this.emoji} ${this.nome} está florescendo em ${this.cor}! 🌸`;
  }

  cuidar(): string {
    return `${this.emoji} ${this.nome} floresceu com o seu cuidado!`;
  }
}