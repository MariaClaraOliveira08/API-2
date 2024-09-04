module.exports = class controllerNumbers{

    //Cadastro de professor
        static async postNumbers(req,res){
    
            const {number} = req.body;
            for(i = 2; i > number; i++){
                res.status(400).json({message:'Numero inválido'});
            }
            if (number%i=== 0){
                res.status(200).json({message:'Não é primo'});
    
            }
    
        }
       
    };