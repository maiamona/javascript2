 import { Cliente } from "./Cliente.js";
 import { contaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
// cliente1.nome = "Ricardo";
// cliente1.cpf = 11122233309;


// const cliente2 = new Cliente();
// cliente2.nome = "Alice";
// cliente2.cpf = 88822233309;
const cliente2 = new Cliente("Alice", 88822233309);
console.log(cliente2.cpf);

const contaCorrenteRicardo = new contaCorrente(1001, cliente1);
// contaCorrenteRicardo.#saldo = 1000;
// contaCorrenteRicardo.agencia = 1001;
// contaCorrenteRicardo.cliente = cliente1;

contaCorrenteRicardo.depositar(500);

const conta2 = new contaCorrente(102, cliente1);


// conta2.cliente = cliente2;
conta2.cliente = new Cliente("Alice");
// conta2.cliente.nome = "Alice";
// conta2.cliente.cpf = 88822233309;
// conta2.cliente = 0;
// conta2.cliente = cliente1;
// conta2.agencia = 102;
// console.log(conta2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);
console.log("valor: ", valor);
// console.log(conta2.cliente);
// conta2.saldo = 30000;
// console.log(conta2.saldo);




// contaCorrenteRicardo.saldo += 100;
// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(200);
// contaCorrenteRicardo.depositar(-1);


// const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(contaCorrente.numeroDeContas);








// console.log(contaCorrenteRicardo);
// console.log(cliente1);
// console.log(cliente2);