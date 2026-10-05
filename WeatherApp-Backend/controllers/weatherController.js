import express from 'express';
import * as weatherService from '../services/weatherService.js';

const router = express.Router();
router.post("/current",async (req,res)=>{
    const {latitude,longitude} = req.body;
    res.json(await weatherService.getWeather(latitude,longitude));
});
export default router;