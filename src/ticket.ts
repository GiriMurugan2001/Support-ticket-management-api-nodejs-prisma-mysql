const router = require('express').Router();
import {PrismaClient} from "@prisma/client";
const prisma =  new PrismaClient;
import {Request , Response} from "express";

//  post 
router.post('/create', async (req:Request, res:Response)=>{
    console.log("inside ticket system.. ticket api..")
    const {title,description,projectName,assignee,priority,status,type} = req.body;
    try{
    const ticket = await prisma.ticket.create({
        data:{
            title:String(title),
            description:String(description),
            projectName: String(projectName),
            assignee: String(assignee),
            priority : String(priority),
            status:String(status),
            type: String(type)
        }
    });
    res.json({message:"Success" , data:ticket});}
    catch (err) {
        return res.status(500).json(err)
      }
});

 // find one
 router.get('/create/:id', async (req:Request,res:Response)=>{
    const {id} = req.params;
    try{
    const ticket = await prisma.ticket.findUnique({
        where:{
            id:Number(id)
        }
    });
    res.json({message:"Success", data:ticket});}
    catch (err) {
        return res.status(500).json(err)
 }
});

//   find many 
router.get('/create', async (req:Request,res:Response)=>{
    try{
    const ticket = await prisma.ticket.findMany()
    res.json({message:"Success", data:ticket })}
    catch (err) {
        return res.status(500).json(err)
      }
});

//  Update
router.patch('/create/:id', async (req:Request,res:Response)=>{
    const {id} = req.params;
    const {title,description,projectName,assignee,priority,status,type} = req.body;
    try{
    const ticket = await prisma.ticket.update({
        where:{
            id:Number(id)
        },
        data:{
            title:String(title),
            description:String(description),
            projectName: String(projectName),
            assignee: String(assignee),
            priority : String(priority),
            status:String(status),
            type: String(type)

        }
    });
    res.json({message:"Success", data:ticket});}
    catch (err) {
        return res.status(500).json(err)
      }
});
 
//   Delete

router.delete('/create/:id', async(req:Request, res:Response)=>{
    const {id} = req.params;
    try{
    const ticket = await prisma.ticket.delete({
        where:{
            id:Number(id)
        }
    });
    res.json({message:"Success"});}
    catch (err) {
        return res.status(500).json(err)
      }

 });

 

 // Export?
 module.exports = router;




