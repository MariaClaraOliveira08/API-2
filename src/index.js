// Importa o módulo Express
const express = require("express") 

//Define uma classe para organizar a lógica da aplicação
class AppController{
    constructor(){
        // Cria uma nova instância do Express dentro da classe
        this.express = express();
        // Chama o método middlewares para configurar os middlewares
        // entre uma aplicação e outra
        this.middlewares();
        // Chama o método routes para definir as rotas da API
        this.routes();
    }
    middlewares(){
        // Permitindo que a aplicação receba dados em formato JSON nas requisições
        this.express.use(express.json()); // pro express usar o que tá dentro dos parenteses
    }

    //Define as rotas da nossa API
    routes(){
        const apiRoutes = require('./routes/apiRoutes');
        this.express.use('/project-senai/api/v1/',apiRoutes);
        this.express.get("/health/",(req, res) => { 
            res.send({ Status: 'OK' }); 
    }); 
    }
}


module.exports = new AppController().express;