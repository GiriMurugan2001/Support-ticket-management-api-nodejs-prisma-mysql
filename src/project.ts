const router = require('express').Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;
import {Request,Response} from 'express';

           //Post
router.post('/create', async (req:Request, res:Response)=>{
    const {name,description} = req.body;
    try{
    const project = await prisma.project.create({
        data:{
            name:String(name),
            description:String(description),
        }
    });
    res.json({message:"Success" , data:project});}
    catch (err) {
        return res.status(500).json(err)
      }
});

     // Find One

router.get('/create/:id', async (req:Request,res:Response)=>{
    const {id} = req.params;
    try{
    const project = await prisma.project.findUnique({
        where:{
            id:Number(id)
        }
    });
    res.json({message:"Success", data:project});}
    catch (err) {
        return res.status(500).json(err)
      }
});


       //Find All
router.get('/create', async (req:Request,res:Response)=>{
    try{
    const project = await prisma.project.findMany()
    res.json({message:"Success", data:project })}
    catch (err) {
        return res.status(500).json(err)
      }
});

            // Update

router.patch('/create/:id', async (req:Request,res:Response)=>{
    const {id} = req.params;
    const {name,description} = req.body;
    try{
    const project = await prisma.project.update({
        where:{
            id:Number(id)
        },
        data:{
            name:String(name),
            description:String(description),
        }
    });
    res.json({message:"Success", data:project});}
    catch (err) {
        return res.status(500).json(err)
      }
});

// Delete 

router.delete('/create/:id', async(req:Request, res:Response)=>{
    const {id} = req.params;
    try{
    const project = await prisma.project.delete({
        where:{
            id:Number(id)
        }
    });
    res.json({message:"Success"});}
    catch (err) {
        return res.status(500).json(err)
      }

});

 // Export??
module.exports = router;




