//Definido a classe calculadora
class Calculadora {
    constructor() {
        // Inicializando o visor com o valor 0
        this.valor = '0'
    }

    //Método para adicionar um número no visor
    adicionarNumero(numero) {
        if (this.valor === '0') {
            //Se o valor atual for 0 vai substituir
            this.valor = numero
        } else {
            //Senão, adiciona o número n final do valor atual
            this.valor += numero
        }
        //Atualiza o visor
        this.atualizarVisor()
    }

    //Método para adicionar operação no visor
    adicionarOperacao(operacao) {
        if (
            this.valor.slice(-1) === '+' ||
            this.valor.slice(-1) === '-' ||
            this.valor.slice(-1) === '*' ||
            this.valor.slice(-1) === '/' 
        ) {
            //Se o último caractere do valor atual for uma operação, substitui essa operação pela nova operação
            this.valor = this.valor.slice(0, -1) + operacao
        } else {
            //Senão, adiciona a operação
            this.valor += operacao
        }
        //Atualiza o visor
        this.atualizarVisor()
    }

    limpar() {
        //Metodo para limpar o visor
        this.valor = '0'
        this.atualizarVisor()
    }

    resultado() {
        try {
            // Usa a função eval() para calcular o resultado da expressão no visor
            this.valor = eval(this.valor).toString()
        } catch(e) {
            // Se houver um erro na expressão, exibe a mensagem de Erro
            this.valor = 'Erro'
        }
        this.atualizarVisor()
    }

    // Método para atualizar o visor com o valor atual da calculadora
    atualizarVisor() {
        document.getElementById('visor').value = this.valor
    }
}
let calculadora = new Calculadora()