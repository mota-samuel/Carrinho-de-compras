let valorTotal = 0;
limpar();


function adicionar()
{
    let produtoLista = document.getElementById('produto').value;
    let nomeProduto = produtoLista.split('-')[0]; // a função slit separa a linha como um arrey, buscando um caracter definido, após indicar a posição qual parte vc tem interresse 
    let preco = produtoLista.split('$')[1];
    let quantidade = document.getElementById('quantidade');
    let subTotal = preco * quantidade.value;
    let lista = document.getElementById('lista-produtos');
    lista.innerHTML =  lista.innerHTML  +  `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
  </section>`;

  valorTotal = valorTotal + subTotal;
  let total = document.getElementById('valor-total');
  total.textContent = `R$${valorTotal}`;


  quantidade.value = 0 ;
  //let qntBox = quantidade.querySelector('texto-medio-azul');
  //qntBox.innerHTML = '';
}

  function limpar()
{
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = ' ';
    document.getElementById('valor-total').textContent = 'R$ 0';
    
}