import express,{Request,Response} from "express";
import cors from 'cors';

const app = express();
app.use(cors());

// only one port run and res the data
/* const allowedOrigins = ['http://localhost:8081'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options)); */


app.use(express.json());

app.use('/users', require('./src/user'));
app.use('/tickets', require('./src/ticket'));
app.use('/creates', require('./src/project'));

app.get('/', (req:Request, res:Response) => {
    res.json({message:'Test Project'})
})

app.listen(7000, ()=>{
    console.log("Server is running in port 7000");
});

// app.options('/*', (_, res) => {
//     res.sendStatus(200);
// });