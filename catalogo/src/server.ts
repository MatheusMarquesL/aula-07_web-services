import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = Number(process.env.PORT) || 3001;

const produtos = [
  {
    id: 1,
    nome: "Teclado",
    preco: 100,
    estoque: 10
  },
  {
    id: 2,
    nome: "Mouse",
    preco: 50,
    estoque: 20
  },
  {
    id: 3,
    nome: "Headset",
    preco: 150,
    estoque: 5
  }
];

app.get("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);

  const produto = produtos.find((produto) => produto.id === id);

  if (!produto) {
    return res.status(404).json({
      mensagem: "Produto inexistente"
    });
  }

  return res.status(200).json(produto);
});

app.listen(PORT, () => {
  console.log(`Catálogo rodando na porta ${PORT}`);
});