const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const UserModel = require('./models/usuario');
const db = require("./db/conect")

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());


//Routes
app.post('/create', async(req,res)=>{

    try{
        let reqs = await UserModel.create({
            'email' : req.body.emailUser,
            'senha' : req.body.senhaUser
         })
         res.json("msg: usuario cadastrado")
    }catch(err){
        res.json(err)

    }
});

//Rota login
app.post("/login", async (req, res) => {
    const { email, senha } = req.body;
    try {
      const reqs = await UserModel.findOne({ email: email });
  
      if(reqs.password === senha) {
          try{
            
          }catch(err){
              return res.status(401).json({msg: "Algo deu errado, tente novamente"})
          }
      }else{
        res.json({msg: "senha incorreta"})
      }
    } catch (err) {
      res.json({msg: "usuario não encontrado"});
    }
  });
  


//Start server
let port = process.env.PORT || 3000;
app.listen(port, async (req,res)=>{
    console.log(port,'Servidor Rodando');

    await db.sync({force: false}) // se quiser que o banco

    console.log("banco conectado");
})