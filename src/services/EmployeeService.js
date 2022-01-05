const db = require('../db');

module.exports = {
    //função de exibir todos os funcionários cadastrados
    searchAll: () =>{
        return new Promise((aceito, rejeitado)=>{
            //seleciona todos os dados da tabela employee do banco
            db.query('SELECT * FROM employee', (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    }, 
    //função procurar funcionário por id
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
    }, 
    //função criar funcionário
    createEmployee: (name, document, email, phone, birth_date, salary, created_at) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('INSERT INTO employee (name, document, email, phone, birth_date, salary, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)', 
            [name, document, email, phone, birth_date, salary, created_at],
            (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results.insertID);
            }
            );
        });
    }, 

    //função editar funcionário por ID
    editEmployeeByID: (id, name, document, email, phone, birth_date, salary, created_at) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('UPDATE employee SET name = ?, document = ?, email = ?, phone = ?, birth_date = ?, salary = ?, created_at = ? WHERE id = ?', 
            [name, document, email, phone, birth_date, salary, created_at, id],
            (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            }
            );
        });
    },
    
    //função deletar funcionário por ID
    deleteEmployeeByID: (id) =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM employee WHERE id = ?', [id], (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    }

};