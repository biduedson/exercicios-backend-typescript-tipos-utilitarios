type Item = {
  nome: string;
  descricao: string;
  valor: number;
};

type Cartao = {
  numero: number;
  validade: string;
  nome: string;
  cvv: number;
};

type Carrinho = {
  item: Item;
  qtd: number;
  desconto: number;
  frete: number;
  tipoTransacao: "credito" | "Debito";
  cartao: Cartao;
};

type Endereco = {
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
};

type TipoTransacao = "credito" | "Debito";

type NovoCarrinho = {
  item: Item;
  qtd: number;
  desconto: number;
  frete: number;
  tipoTransacao: Lowercase<TipoTransacao>;
  cartao: Cartao;
  endereco: Endereco;
};

const novoCarrinho: NovoCarrinho = {
  item: {
    nome: "Bola",
    descricao: "Bola de Futebol se salão",
    valor: 12457,
  },
  qtd: 12,
  desconto: 12,
  frete: 123,
  tipoTransacao: "credito",
  cartao: {
    numero: 123412341234,
    validade: "05/29",
    nome: "Edson Gomes",
    cvv: 123,
  },
  endereco: {
    cep: "07918120",
    rua: "Bahia",
    bairro: "120",
    cidade: "Francisco Morato",
    estado: "SP",
  },
};
