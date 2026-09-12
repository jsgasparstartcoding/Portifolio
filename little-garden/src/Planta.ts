export class Planta {
  static totalPlantas: number = 0;

  nome: string;
  especie: string;
  emoji: string;

  private _nivelAgua: number;

  constructor(nome: string, especie: string, emoji: string, nivelAgua: number) {
    this.nome = nome;
    this.especie = especie;
    this.emoji = emoji;
    this._nivelAgua = 0;
    this.nivelAgua = nivelAgua;

    Planta.totalPlantas++;
  }

  get nivelAgua(): number {
    return this._nivelAgua;
  }

  set nivelAgua(valor: number) {
    if (valor < 0) {
      this._nivelAgua = 0;
    } else if (valor > 100) {
      this._nivelAgua = 100;
    } else {
      this._nivelAgua = valor;
    }
  }

  regar(): void {
    this.nivelAgua = this._nivelAgua + 20;
  }

  verificarSaude(): string {
    if (this._nivelAgua < 30) return "Com sede 😢";
    if (this._nivelAgua > 90) return "Encharcada 💦";
    return "Saudável 🌱";
  }

  cuidar(): string {
    return `${this.emoji} ${this.nome} agradece pelo carinho.`;
  }
}