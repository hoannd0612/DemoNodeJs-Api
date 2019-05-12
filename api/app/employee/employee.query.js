const getAllEm = 'Select * from employee';
const getById = 'Select * from employee where id = ?';
const getByname = 'Select * from employee where name = ?';
const getBySalary = 'Select * from employee where salary = ?';
const deleteById = 'Delete from employee where id = ?';
const createEmp = 'INSERT INTO employee (id, name, salary) values (?, ?, ?)';
const updateEmp = 'Update employee set name = ? , salary = ? where id = ?';

module.exports = {
    getAllEm,
    getById,
    getByname,
    getBySalary,
    deleteById,
    createEmp,
    updateEmp
}