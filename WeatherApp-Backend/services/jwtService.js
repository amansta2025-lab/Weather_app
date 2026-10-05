import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();    

export async function generateToken(email, role)
{
    const token = jwt.sign(
        {

        email: email,
        role: role

        },

        process.env.jwtsecret,
        
        { 
            expiresIn: "1d"
        }
    );
 return token;
}
export async function validateToken(token) {
    return jwt.verify(token, process.env.jwtsecret);
    
}