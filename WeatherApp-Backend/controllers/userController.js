import express from 'express';
import * as userService from '../services/userService.js';

const router = express.Router();

router.post("/register", async (req, res)=> {
    res.json(await userService.registerUser(req.body));
});

router.post("/login", async (req, res)=> {
    const {email, password} = req.body;
    res.json(await userService.validateUser(email, password)); 
});

router.get("/fullname",async (req, res)=>{
    res.json(await userService.getFullname(req.headers.token));
})
router.get("/profile", async (req,res)=>{
    
    res.json(await userService.getProfile(req.headers.token));
});

export default router;