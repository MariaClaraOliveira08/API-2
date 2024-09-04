// Importa o módulo Router do express
// Router será utilizado para definir rotas específicas da aplicação
const router = require('express').Router();

// Importa a controller de professores onde contém a lógica relacionada a professores
const controllerNumbers = require('../controllers/controllerNumbers'); //volta pro caminho anterior

// Rota POST para '/teacher'
router.post('/checkPar',controllerNumbers.postNumber);
router.get('/checkPrimo',controllerNumbers.getNumber);

module.exports = router