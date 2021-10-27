import { Cliente } from "./Cliente.js";

 export class contaCorrente{
  static numeroDeContas = 0;
    agencia;
    _cliente;
    // #saldo = 0;
    _saldo = 0;

    get saldo () {
        return this._saldo;
    }

    set cliente (novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;    
        }
        
    }

    get cliente () {
        return this._cliente;
    }

    constructor(agencia, cliente){
this.agencia = agencia;
this.cliente = cliente;
contaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if (this._saldo >= valor) {
            this._saldo -= valor;
            // console.log(contaCorrenteRicardo.#saldo);
            return valor;
        } else{
            console.log("saldo insuficiente");
        }
    }

    // depositar(valor){
    //     if (valor > 0) {
    //         this.#saldo += valor;
    //         console.log(this.#saldo);
    //     }
    // }

    depositar(valor){
        if (valor <= 0) return;
        
        this._saldo += valor;
            console.log(this._saldo);
    }

    transferir(valor, conta){
        
const valorSacado = this.sacar(valor);
conta.depositar(valorSacado);
// conta.cidade = "Luanda";
// valor = 20;
    }
}