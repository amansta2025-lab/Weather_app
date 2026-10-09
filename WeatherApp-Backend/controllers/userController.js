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

router.put("/update", async (req,res)=>{
    
   res.json(await userService.updateUser(req.body));
});


router.delete("/delete/:id", async (req,res)=>{
    
    res.json(await userService.deleteUser(req.params));
});


router.get("/allusers", async (req,res)=>{
    
    res.json(await userService.getAllUsers());
});


export default router;