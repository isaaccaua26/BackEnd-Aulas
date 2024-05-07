const express = require

const produtosController 3 require('../controllers/controller_produtos')   

const router = express.Router(); 

router.get("/", produtosController.listarTodos); 

router.get("/:produtoId", produtosController. buscarPeloId);

router.post("/", produtosController.criar); 

router.put("/:produtoId", produtosController.atualizar);

module.exports = router;