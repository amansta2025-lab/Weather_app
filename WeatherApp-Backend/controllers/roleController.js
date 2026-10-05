import express from 'express';
import * as roleService from '../services/roleService.js';

const router = express.Router();

router.get("/rbac",async (req,res)=>{
    res.json(await roleService.getMenusByRole(req.headers.token));
});

export default router;