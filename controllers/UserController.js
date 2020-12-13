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
 exports.signin = async(req,res,next) =>{
    try{
        const user = await users.findOne({where: {email: req.body.email}}) 
        if (user){
            passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
            if (passwordIsValid){
                const token = jwt.sign({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }, 'config.secret',{
                    expiresIn:3600
                }
                );
                res.status(200).send({auth:true, accessToken: token, user:user})
            }else{
                res.status(401).json({error: "Error en usuario o contraseña"})
            }
        }else{
            res.status(404).json({error:"Error en usuario o contraseña"})
        }
    }catch(error){
        res.status(500).send({message: "Error -->",});
        next(e);

    }

 };

