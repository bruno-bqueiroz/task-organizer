import  {Request, Response} from 'express';

import {listUser, insertUser} from '../repositories/user-repository.js';

import {User} from '../protocols/user.js'

async function loginUser(req: Request,res: Response) {
    
    const resultado = await listUser();
    
    return res.send(resultado.rows)
   
}
async function newUser(req: Request,res: Response){
    const newUser = req.body as User;

    try {
        const result = await listUser();
        const haveUser = result.rows.find(value => value.name === newUser.name);
        if(!haveUser){
            insertUser(newUser)
            return res.status(201).send(`user inserted`);
        }
        else return res.send('user already exists');
        
    } catch (error) {
        return res.send(error.message)
    }
}


export {
    loginUser,
    newUser
}