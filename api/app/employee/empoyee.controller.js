var mysqlConnection = require('../../connectDB');
const querySQL = require('./employee.query');

// Get all
const getAllEmployee = (req, res) => {
    try {
        mysqlConnection.query(querySQL.getAllEm, function (err, data, fileds) {
            if (!err) {

                res.send({ message: 'success', data });
            } else {
                console.log(err);
            }
        });

    } catch (error) {
        return res.status(500).send({ error: 'Internal server error happened' });
    }
}

//Get employee by id
const getEmployeeById = (req, res) => {
    try {
        var id = req.params.id;
        mysqlConnection.query(querySQL.getById, id, function (err, data, fileds) {
            if (!err) {
                if (data) {
                    res.send({ message: 'success', data });
                }
                if (!data) {
                    res.send({ message: 'Id not found' });
                }
            } else {
                console.log(err);

            }
        });
    } catch (error) {
        return res.status(500).send({ message: 'failed' });
    }
}
//// Get employee by name
const getEmployeeByname = (req, res) => {
    try {
        var name = req.params.name;
        mysqlConnection.query(querySQL.getByname, name, function (err, data) {
            if (!err) {
                if (data.length) {
                    res.send({ message: 'success', data });
                }
                if (!data.length) {
                    res.send({ message: 'Name is not found' });
                }
            } else {
                console.log(err);
            }
        })
    } catch (error) {
        return res.status(500).send({ error: 'Internal server error happened' });

    }
}
// Get by salary
const getEmpBySalary = (req, res) => {
    try {
        var salary = req.params.salary;
        mysqlConnection.query(querySQL.getBySalary, salary, function (err, data) {
            if (!err) {
                if (data.length) {
                    res.send({ message: 'success', data });
                }
                if (!data.length) {
                    res.send({ message: 'Salary not found' });
                }
            } else {
                console.log(err);
            }

        });

    } catch (error) {
        return res.status(500).send({ error: 'Internal server error happened' });

    }
}
// Delete employee by id
const deleteEmpById = (req, res) => {
    try {
        var id = req.params.id;
        mysqlConnection.query(querySQL.deleteById, id, function (err, data) {
            if (err) {
                res.send({ message: 'error', message2: err.sqlMessage });
            } else {
                if (data.affectedRows > 0) {
                    res.send({ message: 'Delete success' });
                } else {
                    res.send({ message: 'Id not found fail' });
                }
            }

        });
    } catch (error) {
        return res.status(500).send({ error: 'Internal server error happened' });

    }
}
//// Create empolyee
const createEmployee = (req, res) => {
    let { id, name, salary } = req.body;
    mysqlConnection.query(querySQL.createEmp, [id, name, salary], function (err, data) {
        try {
            if (!err) {
                if (data) {

                    res.send({ message: 'Saved success', data });
                }

            } else {
                console.log(err);
                if (err.message.includes('Duplicate')) {
                    res.status(500).send({ message: 'Duplicate' });
                }
            }
        } catch (error) {
            console.log(error)
            return res.status(500).send({ error: 'Internal server error happened' });

        }
    });
}
//// Update employee
const updateEmployee = (req, res) => {
    let { name, salary, id } = req.body;


    mysqlConnection.query(querySQL.updateEmp, [name, salary, id], function (err, data) {
        try {
            if (err) {
                res.send({ message: 'error', message2: err.sqlMessage });

            } else {
                if (data.affectedRows > 0) {
                    //success
                    res.send({ message: 'update success', message2: data.message });
                } else {
                    res.send({ message: 'update fail', message2: data.message });
                }
            }


        } catch (error) {
            console.log(error)
            return res.status(500).send({ error: 'Internal server error happened' });

        }
    });
}


module.exports = {
    getAllEmployee,
    getEmployeeById,
    getEmployeeByname,
    getEmpBySalary,
    deleteEmpById,
    createEmployee,
    updateEmployee

}