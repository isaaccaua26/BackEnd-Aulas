const readline = require('readline-sync');

const controlador = require('./controlador');
function exibirMenu(){
    console.log("AGENDA");
    console.log("1 - consultar contato")
    console.log("2 - inclir contato")
    console.log("3 - alterarcontato")
    console.log("4 - remover contato")
    console.log("5 - sair")
}
function escolherOpcao(opcao){
    switch(opcao){
        case"1":{
         const nome = readline.question("informe um nome:")
         const contato = controlador.consultarContato(nome);
        console.log("contato localizado. ",contato);
        break;
         

        } 
        case"2":{
        const nome = readline.question("informe um nome:")
        const email = readline.question("informe um email:")
        const telefone= readline.question("informe um telefone:")
        controlador.incluirContato(nome, telefone);
        const contato = controlador.incluirContato(nome,email,telefone);
        console.log("contato incluido. ",contato);
        break;
    }
        
         case"3":{
        const nome = readline.question("informe um nome:")
        const email = readline.question("informe um email:")
        const telefone = readline.question("informe um telefone:")
        const contato = controlador.atualizarContato(nome,email,telefone);
        console.log("contato atualizado. ",contato);
        break;
    }

         case"4":{
         const nome = readline.question("informe um nome:")
         const contato = controlador.removerContato(nome);
         console.log("contato removido. ",contato);
         break;   
    }
        case"5":{
            process.exit(0);
            break }
        default: console.log("opcao invalida.tente novamente.");
    }    
}

function main(){
    while(true){
        exibirMenu();
        const opcao =  readline.question("entre com a opco:");
        escolherOpcao(opcao)
    }
}
main()