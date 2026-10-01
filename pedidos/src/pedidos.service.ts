import { buscarProduto } from "./catalogo.client";

interface CriarPedido {
  produtoId: number;
  quantidade: number;
}

export async function criarPedido(dados: CriarPedido) {
  const produto = await buscarProduto(dados.produtoId);

  if (dados.quantidade > produto.estoque) {
    throw new Error("ESTOQUE_INSUFICIENTE");
  }

  const total = produto.preco * dados.quantidade;

  return {
    produtoId: produto.id,
    quantidade: dados.quantidade,
    total
  };
}