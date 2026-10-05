import dotenv from 'dotenv';
import users from '../model/users.js';
import { generateToken,validateToken } from './jwtService.js';
import { getRoleName } from './roleService.js';

dotenv.config();
export async function registerUser(data) {
    let response;
    try{
        data.role=1;
        await users.create(data);
        response = { code: 200, message: 'User registered successfully......' };

    }catch(error){
        response = { code: 500, message: error.message };

    }
    return response;
}

export async function validateUser(email, password) {
    let response;
    try{
        const u = await users.findOne({ email, password });
        if(!u){
            throw new Error("Invalid User");
        }
        const token = await generateToken(u.email, u.role);
        response = { code: 200, message: "Login Sucess.....", token:token };

    }
    catch(e){
        response = {code: 500, message: e.message};

    }
    return response;

}    
export async function getFullname(token){
    let response;
    try{
        const payload = await validateToken(token);
        const user = await users.findOne({email: payload.email});
        response = {code: 200, fullname: user.fullname};

    }
    catch(e){
        response = {code: 500, message: e.message};
    }
    return response;
}
export async function getProfile(token){
    
    let response;
    try {
       const payload = await validateToken(token);
       const user = await users.findOne({email:payload.email});
       const role = await getRoleName(user.role);
       
       response = { code:200, 
                    data: {
                            fullname: user.fullname,
                            mobile: user.mobile,
                            email: user.email,
                            photo: "default-profile.png",
                            role: role.roleName
                         }
       };
    } 
    catch (e) {
    
        response = {code:500, message:e.message};
    }
    return response;
}