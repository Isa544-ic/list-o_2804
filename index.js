/*
//1a - distancia restante
 function distanciaRestante(distanciaTotal, distanciaPercorrida) {
    // Calculando distância que resta
    return distanciaTotal - distanciaPercorrida;
    alert(`Falta ${distanciaRestante}km para chegar ao deestino`)
  }
  
  //1b - gorjeta garçom
  function calcularGorjeta(valorRefeicao) {
    // Calcula a gorjeta de 10% sobre o valor da refeição, ou seja, 0.10
    return valorRefeicao * 0.10;
    
  }
  
  //1c - polegadas
  function polegadasParaCm(polegadas) {
    return polegadas * 2.54;
 }
    
  //1d - idade em dias
  function idadeEmDias(idadeAnos) {
   return idadeAnos * 365; 
   (calcular por dia X->365)
 }
  //1e - preço por unidade
  function precoUnitario(precoTotalPacote, numeroItens) {
    return precoTotalPacote / numeroItens;
 }
    
  //1f - minutos para segundos 
  function minutosParaSegundos(minutos) {
    return minutos * 60; 
     X por 60 segundos
 }

 //1g - verificar se é numero
 function ehNumero(valor) {
    return typeof valor === 'number';
 }
 console.log(`10 é um número? ${ehNumero(10)}`);
 console.log(`"Olá" é um número? ${ehNumero("Olá")}`);
 console.log(`true é um número? ${ehNumero(true)}`);

 //1h - porta aberta ou fechda?
 let portaAberta = false;
  function verificarPorta() {
 // aberta a porta
 return portaAberta;
 }

 //1i - email simples
 function criarEmail(nomeUsuario) {
 //cria o email
    return nomeUsuario + "@exemplo.com";
 }

 //1j - paginas restantes
 function paginasRestantes ( totalPaginas , paginasLidas ) { 
    //criando a função paginasRestantes
    return totalPaginas - paginasLidas ; // calcula as páginas q sobraram e faz a subtração
}



//2a- temperatura agradavel 
function temperaturaAgradavel(temperatura) { // criando a função temperaturaAgradavel
    return temperatura >= 20 && temperatura <= 25; // retorna que se a temperatura for maior ou igual a 20 e menor ou igual a 25, é true
}


//2b - 
function checarAprovacao(nota) { // criando a função checarAprovacao
   if (nota => 7) { // se a nota for maior ou igual a 7
       return "Você foi aprovado!"; // você será aprovado
   } else {
       return "Você foi reprovado!"; // se não, você será reprovado
   }
}


//2c -
function temEntradaGratuita(idade) { // criando a função temEntradaGratuita
   return idade >= 65; // se o idoso tiver 65 ou mais anos de idade, terá desconto
}


//2d - 
function ehZero(numero) { // criando a função ehZero
   return numero === 0; // se o número for EXATAMENTE igual a 0, ele será zero
}


//2e - 
function tipoDeDia(diaSemana) { // criando a função tipoDeDia
   if (diaSemana === "sábado" || diaSemana === "domingo") { // se o dia da semana for sábado ou domingo
     return "Fim de semana"; // é fim de semana
   } else { // se não for sábado e nem domingo
     return "Dia útil"; // é dia útil (dia de semana)
   }
}





/*
//3a - andares do elevador 
function simularElevador() {
    for (let i = 1; i <= 5; i++) {
      alert(`Subindo para o andar ${i}`);
    }
  }


//3b - contar ovrrlhas
function contarOvelhas() {
    for (let i = 1; i <= 5; i++) {
      alert(`${i} ovelha...`);
    }
  }
  contarOvelhas();


//3c - somar numeros pares ate N
 function somarParesAteN(n) {
    let soma = 0;
    for (let i = 2; i <= n; i += 2) {
      soma += i;
    }
    return soma;
  }
  console.log(somarParesAteN(10)); // Exemplo: somar pares até 10


//3d - imprimir impares ate 9
function listarImparesAte9() {
    for (let i = 1; i < 10; i += 2) {
      console.log(i);
    }
  }
  listarImparesAte9();


//3e - gerar asteriscos 
 function linhaDeAsteriscos(quantidade) {
    let linha = "";
    for (let i = 0; i < quantidade; i++) {
        linha += "*";
    }
    return linha;
}



//6a - descrever um carro
  function descrevermeucarro() {
    return { //propiedades
        marca: marca,
        modelo: modelo,
        ano: ano
    };
  }
  const carro = descreverMeuCarro(); //chama a função e armazena
  console.log(carro); //exibe o objeto no console


  //6b - pegar marca do carro
  function getMarcaCarro(carro){
    return carro.marca;
  }
  const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
  };
  const marcaDoCarro = getMarcaCarro(carro);
  console.log(marcaDoCarro);  // Saída: "Toyota"


  //6c - pagar ano do carro
  // Definindo o objeto carro com as propriedades
 const carro = {
    marca: "Fusca",
    modelo: "Fusca 1300",
    ano: 1969,
    cor: "azul"
  };
  // Função para retornar o ano de fabricação do exemplo do carro
  function getAnoCarro(carro) {
    return carro.ano;
  }
  console.log(getAnoCarro(carro)); // chama e exibe o resultado
  

  //6d - atualizar modelo do carro
 // Definindo o objeto carro com a propriedade modelo
 const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "preto"
  };
  // Função que atualiza o modelo do carro
  function atualizarModeloCarro(carro, novoModelo) {
    carro.modelo = novoModelo;  // Atualiza a propriedade 'modelo' do objeto carro
    return carro;  // Retorna o objeto modificado
  }
  // Chamando a função para atualizar o modelo do carro
  const carroAtualizado = atualizarModeloCarro(carro, "Camry");
  // Exibindo o objeto atualizado
  console.log(carroAtualizado);
  
  //6e - descrever um produto
  // Função que cria um objeto produto com as propriedades nome, preço e código
 function criarProduto(nome, preco, codigo) {
    // Retorna o objeto produto com as propriedades fornecidas
    return {
      nome: nome,
      preco: preco,
      codigo: codigo
    };
  }
  // Chamando a função para criar um produto
  const produto = criarProduto("Notebook", 2500.00, "ABC123");
  // Exibindo o objeto produto
  console.log(produto);
  

  //6f - mostrar preço do produto
  // Definindo um objeto produto
 const produto = {
    nome: "Smartphone",
    preco: 1500.00,
    codigo: "XYZ789"
  };
  // Função que mostra o preço do produto
  function mostrarPrecoProduto(produto) {
    console.log(`Preço: R$${produto.preco}`);
  }
  // Chamando a função para exibir o preço do produto
  mostrarPrecoProduto(produto);
  

  //6g - adicionar estoque ao produto
 // Definindo um objeto produto
 const produto = {
    nome: "Cadeira",
    preco: 350.00,
    codigo: "DEF456"
  };
  // Função que adiciona a quantidade de estoque ao produto
  function adicionarEstoqueProduto(produto, quantidade) {
    produto.estoque = quantidade;  // Adiciona a propriedade estoque ao objeto
    return produto;  // Retorna o objeto modificado
  }
  // Chamando a função para adicionar o estoque ao produto
  const produtoComEstoque = adicionarEstoqueProduto(produto, 50);
  // Exibindo o objeto produto com a nova propriedade estoque
console.log(produtoComEstoque);
  
*/





//7a - lista de produtos
function criarListaProdutos() {

    return [
    { nome: "Camiseta", preco: 29.99 },
    //(exemplo a camiseta / string)
    { nome: "Calça Jeans", preco: 79.50 }
    //(exemplo a calça jeans / string)
    ];
    
}


//7b - encontrar produto por nome 
function encontrarProdutoPorNome(produtos, nomeProduto) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].nome === nomeProduto) {
            return produtos[i];
        }
    }
    return undefined;
}


//7c - listar nome dos produtos
function listarNomesProdutos(produtos) {
        const nomes = [];
    //(parametro)
    
        for (let i = 0; i < produtos.length; i++) {
    nomes.push(produtos[i].nome);
    
    //(Dentro do loop:)
        }
        return nomes;
}


//7d - somar precos dos produtos
function somarPrecosProdutos(produtos) {
let total = 0;
    for (let i = 0; i < produtos.length; i++) {
    total += produtos[i].preco;
}
    return total;
}

//7e - verificar comprimentar do Username
//7f - contar espaços
//7g - Criar String com Hífens
//7h - primeira letra de cada palavra
