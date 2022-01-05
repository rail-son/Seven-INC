const EmployeeService = require('../services/EmployeeService');

module.exports = {
    searchAll: async (req, res) => {
        let json = {error:'', result:[]};
        let employees = await EmployeeService.searchAll();
        for(let i in employees){
            json.result.push({
                id: employees[i].id, 
                name: employees[i].name,
                document: employees[i].document,
                email: employees[i].email,
                phone: employees[i].phone,
                birth_date: employees[i].birth_date,
                salary: employees[i].salary,
                created_at: employees[i].created_at
            });
        }
        res.json(json);
    },

    searchByID: async(req, res) => {
        let json = {error:'', result:{}};
        let id = req.params.id;
        let employee = await EmployeeService.searchByID(id);

        if(employee){
            json.result = employee;
        }

        res.json(json);
    }, 

    createEmployee: async(req, res) =>{
        let json = {error:'', result:{}};

        let name = req.body.name;
        let document = req.body.document;
        let email = req.body.email;
        let phone = req.body.phone;
        let birth_date = req.body.birth_date;
        let salary = req.body.salary;
        let created_at = req.body.created_at;

        if(name && document && email && phone && birth_date && salary && created_at){
            let EmployeeID = await EmployeeService.createEmployee(name, document, email, phone, birth_date, salary, created_at);
            json.result = {
                id: EmployeeID, 
                name,
                document, 
                email, 
                phone, 
                birth_date, 
                salary, 
                created_at
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    }, 

    editEmployeeByID: async(req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let name = req.body.name;
        let document = req.body.document;
        let email = req.body.email;
        let phone = req.body.phone;
        let birth_date = req.body.birth_date;
        let salary = req.body.salary;
        let created_at = req.body.created_at; 

        if(id && name && document && email && phone && birth_date && salary && created_at){
            await EmployeeService.editEmployeeByID(id, name, document, email, phone, birth_date, salary, created_at);
            json.result = {
                id, 
                name,
                document, 
                email, 
                phone, 
                birth_date, 
                salary, 
                created_at
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    }, 
    deleteEmployeeByID: async(req, res) => {
        let json = {error:'', result:{}};

        await EmployeeService.deleteEmployeeByID(req.params.id); 
        
        res.json(json);

    }
}