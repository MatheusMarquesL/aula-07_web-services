import express from "express";
import dotenv from "dotenv";
import { criarPedido } from "./pedidos.service";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = Number(process.env.PORT) || 3000;

app.post("/pedidos", async (req, res) => {
  try {
    const { produtoId, quantidade } = req.body;

    if (!produtoId || !quantidade) {
      return res.status(400).json({
        mensagem: "produtoId e quantidade são obrigatórios"
      });
    }

    const pedido = await criarPedido({
      produtoId,
      quantidade
    });

    return res.status(201).json(pedido);
  } catch (erro) {
    if (erro instanceof Error) {
      if (erro.message === "PRODUTO_INEXISTENTE") {
        return res.status(404).json({
          mensagem: "Produto inexistente"
        });
      }

      if (erro.message === "ESTOQUE_INSUFICIENTE") {
        return res.status(409).json({
          mensagem: "Estoque insuficiente"
        });
      }

      if (erro.name === "TimeoutError") {
        return res.status(504).json({
          mensagem: "Catálogo indisponível"
        });
      }
    }

    return res.status(502).json({
      mensagem: "Catálogo temporariamente indisponível"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Pedidos rodando na porta ${PORT}`);
});