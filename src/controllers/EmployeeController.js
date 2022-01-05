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
    }
}