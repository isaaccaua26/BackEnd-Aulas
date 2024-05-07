 function consultarContato(nome){
    return{
        id: 1,nome,email:`${nome}@gmail.com`,telefone:"8888-8888"
    }
 }
 function incluirContato(nome,email,telefone){
    return{
        id: 1,nome,email:`${nome}@gmail.com`,telefone:"8888-8888"
    }
 }
 function atualizarContato(nome,email,telefone){
    const contato = consultarContato(nome)
    contato.email = email
    contato.telefone = telefone
    return contato
 }
 function removerContato(nome){
    const contato = consultarContato(nome)
    return contato
 }

 module.exports = {
    consultarContato,
    incluirContato,
    atualizarContato,
    removerContato,
};