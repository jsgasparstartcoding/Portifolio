export class Planta {
    constructor(nome, especie, emoji, nivelAgua) {
        this.nome = nome;
        this.especie = especie;
        this.emoji = emoji;
        this._nivelAgua = 0;
        this.nivelAgua = nivelAgua;
        Planta.totalPlantas++;
    }
    get nivelAgua() {
        return this._nivelAgua;
    }
    set nivelAgua(valor) {
        if (valor < 0) {
            this._nivelAgua = 0;
        }
        else if (valor > 100) {
            this._nivelAgua = 100;
        }
        else {
            this._nivelAgua = valor;
        }
    }
    regar() {
        this.nivelAgua = this._nivelAgua + 20;
    }
    verificarSaude() {
        if (this._nivelAgua < 30)
            return "Com sede 😢";
        if (this._nivelAgua > 90)
            return "Encharcada 💦";
        return "Saudável 🌱";
    }
    cuidar() {
        return `${this.emoji} ${this.nome} agradece pelo carinho.`;
    }
}
Planta.totalPlantas = 0;
