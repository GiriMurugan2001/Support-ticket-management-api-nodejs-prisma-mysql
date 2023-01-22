const router = require('express').Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;
import {Request,Response} from "express";

// Post
router.post('/user', async (req:Request, res:Response)=>{
    const {name,email,role} = req.body;
    try{
    const user = await prisma.user.create({
        data:{
            name:String(name),
            email:String(email),
            role:String(role)
        }
    }); 
    res.json({message:"Success" , data:user});}
    catch (err) {
        return res.status(500).json(err)
      }
});

// Find One

router.get('/user/:id', async (req:Request,res:Response)=>{
    const {id} = req.params;
    try{
    const user = await prisma.user.findUnique({
        where:{
            id:Number(id)
        }
    });
    res.json({message:"Success", data:user});}
    catch (err) {
        return res.status(500).json(err)
      }
});


       //Find All
router.get('/user', async (req:Request,res:Response)=>{
    try{
    const user = await prisma.user.findMany()
    res.json({message:"Success", data:user })}
    catch (err) {
        return res.status(500).json(err)
      }
});


         // Update
router.patch('/user/:id', async (req:Request,res:Response)=>{
    const {id} = req.params;
    const {name,email,role} = req.body;
    try{
    const user = await prisma.user.update({
        where:{
            id:Number(id)
        },
        data:{
            name:String(name),
            email:String(email),
            role:String(role)
        }
    });
    res.json({message:"Success", data:user});}
    catch (err) {
        return res.status(500).json(err)
      }
});

// Delete 

router.delete('/user/:id', async(req:Request, res:Response)=>{
    const {id} = req.params;
    try{
    const user = await prisma.user.delete({where:{id:Number(id)}});
    res.json({message:"Success"});}
    catch (err) {
        return res.status(500).json(err)
      }

 });

 // Export??
 module.exports = router;


