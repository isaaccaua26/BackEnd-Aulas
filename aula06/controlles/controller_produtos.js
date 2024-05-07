const produtos = [];

function listarTodos(req, res) {
    res.json(produtos);
}

function buscarPeloId(req, res) {
    res.json({});
}

function criar(req, res) {
    res.status(201).json({});
}

function atualizar(req, res) {
    const{produtoId}= req.body;
    encontrado
    res.json({});
}

function listarTodos(req, res) {
    res.json(produtos);
}