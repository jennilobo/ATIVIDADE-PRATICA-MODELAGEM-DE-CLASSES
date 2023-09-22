// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.
console.log('Questão 1:');

class Contador {
    private valor: number;

    constructor() {
        this.valor = 0;
    }

    zerar(): void {
        this.valor = 0;
    }

    incrementar(): void {
        this.valor++;
    }

    retornarValor(): number {
        return this.valor;
    }
}

const contador = new Contador();

contador.incrementar();
contador.incrementar();
//etc...
console.log("Valor do contador:", contador.retornarValor());

contador.zerar();
console.log("Valor do contador após zerar:", contador.retornarValor());

// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i. Cor
// ii. Circunferência
// iii. Material
// b. Métodos
// i. Trocar Cor
// ii. Mostrar cor
console.log('\nQuestão 2:');

class Bola {
    cor: string
    circunferencia: number
    material: string

    constructor(cor: string, circunferencia: number, material: string) {
        this.cor = cor
        this.circunferencia = circunferencia
        this.material = material
    }

    trocarCor(novaCor: string): void {
        this.cor = novaCor
    }

    mostrarCor(): string {
        return this.cor
    }

}

const minhaBola = new Bola('vermelha', 10, 'plástico');
console.log('Cor atual da bola:', minhaBola.mostrarCor());

minhaBola.trocarCor('azul');
console.log('Nova cor da bola:', minhaBola.mostrarCor());

// 3. Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.

console.log('\nQuestão 3:');

class ContaCorrente {
    numeroConta: string;
    nomeCorrentista: string;
    saldo: number;

    constructor(numeroConta: string, nomeCorrentista: string, saldo: number = 0) {
        this.numeroConta = numeroConta;
        this.nomeCorrentista = nomeCorrentista;
        this.saldo = saldo;
    }

    alterarNome(novoNome: string): void {
        this.nomeCorrentista = novoNome;
    }

    deposito(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`\nDepósito de R$${valor} realizado com sucesso.`);
        } else {
            console.log("\nO valor do depósito deve ser maior que zero.");
        }
    }

    saque(valor: number): void {
        if (valor > 0) {
            if (valor <= this.saldo) {
                this.saldo -= valor;
                console.log(`\nSaque de R$${valor} realizado com sucesso.`);
            } else {
                console.log("\nSaldo insuficiente para realizar o saque.");
            }
        } else {
            console.log("\nO valor do saque deve ser maior que zero.");
        }
    }

    consultarSaldo(): void {
        console.log(`\nSaldo atual da conta: R$${this.saldo}`);
    }
}

const minhaConta = new ContaCorrente("12345", "Jennie");

minhaConta.alterarNome("Jennifer");
console.log(`\nNome do correntista: ${minhaConta.nomeCorrentista}`);

minhaConta.consultarSaldo();

minhaConta.deposito(1000);
minhaConta.consultarSaldo();

minhaConta.saque(300);
minhaConta.consultarSaldo();

// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.
console.log('\nQuestão 4:');

class Calculadora {
    historico: string[] = [];

    somar(a: number, b: number): number {
        const resultado = a + b;
        this.historico.push(`${a} + ${b} = ${resultado}`);
        return resultado;
    }

    subtrair(a: number, b: number): number {
        const resultado = a - b;
        this.historico.push(`${a} - ${b} = ${resultado}`);
        return resultado;
    }

    multiplicar(a: number, b: number): number {
        const resultado = a * b;
        this.historico.push(`${a} * ${b} = ${resultado}`);
        return resultado;
    }

    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Divisão por zero não permitida.");
        }
        const resultado = a / b;
        this.historico.push(`${a} / ${b} = ${resultado}`);
        return resultado;
    }

    visualizarHistorico(): string[] {
        return this.historico;
    }
}

const calculadora = new Calculadora();

const resultadoSoma = calculadora.somar(5, 3);
const resultadoSubtracao = calculadora.subtrair(10, 4);
const resultadoMultiplicacao = calculadora.multiplicar(6, 2);
const resultadoDivisao = calculadora.dividir(8, 2);

const historico = calculadora.visualizarHistorico();

console.log("Resultado da Soma:", resultadoSoma);
console.log("Resultado da Subtração:", resultadoSubtracao);
console.log("Resultado da Multiplicação:", resultadoMultiplicacao);
console.log("Resultado da Divisão:", resultadoDivisao);

console.log("Histórico de Operações:");
historico.forEach((valorAtual, indice) => {
    console.log(`${indice + 1}. ${valorAtual}`);
});

// 5. Faça um programa completo utilizando classes e métodos que:
// a. Possua uma classe chamada BombaCombustivel, com no
// mínimo esses atributos:
// i. tipoCombustivel.
// ii. valorLitro

// iii. quantidadeCombustivel
// b. Possua no mínimo esses métodos:
// i. abastecerPorValor() – método onde é informado o
// valor a ser abastecido e mostra a quantidade de litros
// que foi colocada no veículo
// ii. abastecerPorLitro() – método onde é informado a
// quantidade em litros de combustível e mostra o valor a
// ser pago pelo cliente.
// iii. alterarValor() – altera o valor do litro do combustível.
// iv. alterarCombustivel() – altera o tipo do combustível.
// v. alterarQuantidadeCombustivel() – altera a
// quantidade de combustível restante na bomba.

// OBS: Sempre que acontecer um abastecimento é necessário
// atualizar a quantidade de combustível total na bomba. Não deve ser
// possível abastecer se não tiver gasolina suficiente na bomba.
console.log('\nQuestão 5:');

class BombaCombustivel {
    tipoCombustivel: string
    valorLitro: number
    quantidadeCombustivel: number

    constructor(tipoCombustivel: string, valorLitro: number, quantidadeCombustivel: number) {
        this.tipoCombustivel = tipoCombustivel
        this.valorLitro = valorLitro
        this.quantidadeCombustivel = quantidadeCombustivel
    }

    abastecerPorValor(valor: number): number {
        const litrosAbastecidos = valor / this.valorLitro;
        if (litrosAbastecidos <= this.quantidadeCombustivel) {
            this.quantidadeCombustivel -= litrosAbastecidos;
            return litrosAbastecidos;
        } else {
            throw new Error("Quantidade insuficiente de combustível na bomba.");
        }
    }

    abastecerPorLitro(litros: number): number {
        const valorAPagar = litros * this.valorLitro
        if (litros <= this.quantidadeCombustivel) {
            this.quantidadeCombustivel -= litros
            return valorAPagar
        } else {
            throw new Error("Quantidade insuficiente de combustível na bomba.")
        }
    }

    alterarValor(valorLitro: number): void {
        this.valorLitro = valorLitro
    }

    alterarCombustivel(tipoCombustivel: string): void {
        this.tipoCombustivel = tipoCombustivel
    }

    alterarQuantidadeCombustivel(quantidadeCombustivel: number): void {
        this.quantidadeCombustivel = quantidadeCombustivel
    }
}

const bomba = new BombaCombustivel("Gasolina", 5.0, 100);
const litrosAbastecidosPorValor = bomba.abastecerPorValor(50);
console.log(`\nAbastecidos ${litrosAbastecidosPorValor} litros de ${bomba.tipoCombustivel}.`);

const valorPagoPorLitro = bomba.abastecerPorLitro(50);
console.log(`\nValor pago pelo abastecimento: R$${valorPagoPorLitro}.`);

bomba.alterarValor(4.5);
console.log(`\nValor por litro alterado para R$${bomba.valorLitro}.`);

bomba.alterarCombustivel("Álcool");
console.log(`\nTipo de combustível alterado para ${bomba.tipoCombustivel}.`);

bomba.alterarQuantidadeCombustivel(150);
console.log(`\nQuantidade de combustível na bomba alterada para ${bomba.quantidadeCombustivel} litros.`);

console.log(bomba);


// 6. Implemente uma classe chamada Carro com as seguintes
// propriedades:
// a. Um veículo tem um certo consumo de combustível (medidos
// em km / litro) e uma certa quantidade de combustível no
// tanque.
// b. O consumo é especificado no construtor e o nível de
// combustível inicial é 0.
// c. Forneça um método andar() que simula o ato de dirigir o
// veículo por uma certa distância, reduzindo o nível de
// combustível no tanque de gasolina.

// d. Forneça um método obterGasolina(), que retorna o nível atual
// de combustível e forneça um método adicionarGasolina(),
// para abastecer o tanque.
// Exemplo:
// meuFusca = new Carro(15)
// meuFusca.adicionarGasolina(20)
// meuFusca.andar(100)
// meuFusca.obterGasolina()
console.log('\nQuestão 6:');

class Carro {
    consumoCombustivel: number  // km / litro
    nivelCombustivel: number

    constructor(consumoCombustivel: number) {
        this.consumoCombustivel = consumoCombustivel
        this.nivelCombustivel = 0
    }

    andar(distancia: number): void {
        const consumo = distancia / this.consumoCombustivel
        if (consumo <= this.nivelCombustivel) {
            this.nivelCombustivel -= consumo
        } else {
            throw new Error("Nível de combustível insuficiente para percorrer a distância.");
        }
    }

    obterGasolina(): number {
        return this.nivelCombustivel
    }

    adicionarGasolina(quantidade: number): void {
        if (quantidade > 0) {
            this.nivelCombustivel += quantidade
        }
    }

}

const meuFusca = new Carro(15);
meuFusca.adicionarGasolina(20);
meuFusca.andar(100);
console.log(`Nível atual de combustível: ${meuFusca.obterGasolina()} litros.`);