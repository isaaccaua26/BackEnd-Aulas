const {MongoClient } = require('mongodb')
const url ='mongodb+srv://isaaccaua26:1cocarica@cluster0.aizsccu.mongodb.net/' 

async function conectar(){
    const mongoClient = await MongoClient.connect(url)

    const db = mongoClient.db('loja')
    return db
}

async function inserir(cliente){
    const db = await conectar()
    const clientes = db.collection('clientes')
    return clientes.insertOne(cliente)

}
async function listar(){
    const db = await conectar()
    const clientes = db.collection('clientes');
    return clientes.find ({}).toArray();
}

inserir({nome:"isaac",telefone:"61995004995"})