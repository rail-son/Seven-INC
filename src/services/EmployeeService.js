const db = require('../db');

module.exports = {
    searchAll: () =>{
        return new Promise((aceito, rejeitado)=>{
            //seleciona todos os dados da tabela employee do banco
            db.query('SELECT * FROM employee', (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    }, 

    searchByID: (id) => {
        return new Promise((aceito, rejeitado)=> {

            db.query('SELECT * FROM employee WHERE id = ?', [id], (error, results)=>{
                if(error) {rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    }
};