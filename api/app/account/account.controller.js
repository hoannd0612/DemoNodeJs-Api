var mysqlConnection = require('../../connectDB');
const querySQL = require('./account.query');
const jwt =require('jsonwebtoken');
const key = "hoan";

// check token
const createToken = (req, res) => {
    var { username, password } = req.body;
    try {
        mysqlConnection.query(querySQL.checkTokenSql, [username, password], function (err, result) {
            if (err) {
                res.send({ message: 'error', message2: err.sqlMessage });
            } else {
                let payload = {
                    username: result[0].username,
                    email: result[0].email
                }

                const token = jwt.sign(payload, key);
                    
                res.send({messs:'success',token: token});
                
            }

        });

    } catch (error) {
        return res.status(500).send({ error: 'Internal server error happened' });

    }
}

const checkToken = (req, res) => {
    const token = req.headers['token'];
    if (token) {
        jwt.verify(token, key, (err, decoded) => {
            if (err) {
                res.send({mes: "Authen fail !"})
            } else {
                res.send({decode: decoded});
            }
        })
    } else {
        res.send({mes: 'No token provide'})
    }
}
module.exports = {
    createToken,
    checkToken
}