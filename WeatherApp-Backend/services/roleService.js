import menus from "../model/menus.js";
import users from "../model/users.js";
import roles from "../model/roles.js";
import rolesmappings from "../model/rolesmappings.js";
import {validateToken} from './jwtService.js';

export async function getMenusByRole(token){
    let response;
    try{
        const payload = await validateToken(token);
        const user  = await users. findOne({email: payload.email});
        const mappings = await rolesmappings.find({role: Number(payload.role)});
        const mid = mappings.map( (x) => x.mid);
        const menuList = await menus.find({mid: {$in: mid}});

        response = {code: 200, menulist: menuList,fullname: user.fullname};


    }
    catch(e){
        response = {code: 500, message: e.message};

    }
    return response;
}
export async function getRoleName(role) {
    let response;

    try {
        
        const res = await roles.findOne({role : role});
        response = { code : 200, roleName : res.rolename};
    } 
    catch (e) {
        response = { code : 500, message : e.message};
    }
    return response;
}