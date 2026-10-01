export interface ProdutoRemoto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
}

export async function buscarProduto(
  produtoId: number
): Promise<ProdutoRemoto> {
  const url = `${process.env.CATALOGO_URL}/produtos/${produtoId}`;

  const resposta = await fetch(url, {
    signal: AbortSignal.timeout(2000)
  });

  if (resposta.status === 404) {
    throw new Error("PRODUTO_INEXISTENTE");
  }

  if (!resposta.ok) {
    throw new Error("CATALOGO_INDISPONIVEL");
  }

  const produto = (await resposta.json()) as ProdutoRemoto;

  return produto;
}