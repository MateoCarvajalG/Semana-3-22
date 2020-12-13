const {users} = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


 exports.listar = async(req,res) => {
   const user = await users.findAll({});
   res.status(200).json(user);
 }

 exports.register = async(req,res) => {
    req.body.password = bcrypt.hashSync(req.body.password,10);
    const user = await users.create(req.body);
    res.status(200).json(user);

 }

