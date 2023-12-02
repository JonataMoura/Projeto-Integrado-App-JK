const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const UserModel = require('./db/models/usuario');
const db = require("./db/conect")

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());


//Routes
app.post('/create', async(req,res)=>{
  const { senha, confirmars } = req.body
  if(senha === confirmars){
      let reqs = await UserModel.create({
          'nome' : req.body.nome,
          'email' : req.body.email,
          'senha' : req.body.senha
       })
       res.status(200).json({ status: "OK", msg:"usuario cadastrado"})
  }else{
      res.json(err)

  }
});

//Rota login
app.post("/login", async (req, res) => {
    const { email, senha } = req.body;
    try {
      const reqs = await UserModel.findOne({ where:{ email: email }})
      console.log(reqs);
      if(reqs.senha == senha) {
          try{
            res.status(200).json({
              email: email,
              status: "OK"
            })
            return
          }catch(err){
              return res.status(401).json({msg: "Algo deu errado, tente novamente"})
          }
      }else{
        res.status(402).json({
          status: "senha err",
          msg: "senha incorreta"})
      }
    } catch (err) {
      res.status(403).json({
        status: "lost",
        msg: "usuario não encontrado"});
    }
  });
  


//Start server
let port = process.env.PORT || 3006;
app.listen(port, async (req,res)=>{
    console.log(port,'Servidor Rodando');

    await db.sync({force: true}) // se quiser que o banco

    console.log("banco conectado");
})