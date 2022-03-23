
//Função que cria os cards dinamicamente na pag.
function novoCard(arr){
    
    const lista = document.getElementById('itensVitrine');
    lista.innerHTML = '';

    for(let i = 0; i < arr.length; i++){        

        const itemLista = document.createElement('li');
        itemLista.setAttribute('class','itens');
        itemLista.setAttribute('id',arr[i].id);

        const fundoImg = document.createElement('div');
        fundoImg.setAttribute('class','fundoImg');

        const imgF = document.createElement('img');
        imgF.src = arr[i].img;
        imgF.alt = arr[i].alt;

        const categoriaF = document.createElement('span');
        categoriaF.innerText = arr[i].categoria;
        categoriaF.setAttribute('id','categoria');

        const nomeProdutoF = document.createElement('h2');
        nomeProdutoF.innerText = arr[i].nome;
        nomeProdutoF.setAttribute('id','nomeProduto');

        const descricaoF = document.createElement('span');
        descricaoF.innerText = arr[i].texto;
        descricaoF.setAttribute('id','descricao');

        const precoF = document.createElement('h3');
        precoF.innerText = arr[i].preco;
        precoF.setAttribute('id','preco');

        const addCarrinhoF = document.createElement('span');
        addCarrinhoF.innerText = arr[i].addCar;
        addCarrinhoF.setAttribute('id','addCarrinho');

        fundoImg.appendChild(imgF);

        itemLista.appendChild(fundoImg);
        itemLista.appendChild(categoriaF);
        itemLista.appendChild(nomeProdutoF);
        itemLista.appendChild(descricaoF);
        itemLista.appendChild(precoF);
        itemLista.appendChild(addCarrinhoF);

        lista.appendChild(itemLista);

    }
}
novoCard(dataBase);
//////////////////////////////////////////////////////////////////

//Contador para tabela do total - quantidade
let count = 0;

//contador para tabela do total - valor a pagar
let tTotal = 0;

//Função que adiciona itens ao carrinho e prepara hambiente
function itensCarrinho(event){

    const averiguacao = event.target.id;

    if(averiguacao === 'addCarrinho'){

        const ListaCarrinho = document.getElementById('carrinhoDeCompras');

        const foto = event.target.parentNode.children[0].children[0].src;
        const nameCar = event.target.parentNode.children[2].textContent;
        const valor = event.target.parentNode.children[4].textContent;

        const liCar = document.createElement('li');
        liCar.setAttribute('id','itemNoCarrinho')

        const divPic = document.createElement('div');
        divPic.setAttribute('id','imgNoCarrinho')
        const imagem = document.createElement('img');
        imagem.src = foto;

        const divInfos = document.createElement('div');
        divInfos.setAttribute('id','infosItensCarrinho');

        const nomeTxt = document.createElement('h3');
        nomeTxt.setAttribute('id','nomeNoCarrinho');
        nomeTxt.innerText = nameCar;

        const precoCar = document.createElement('h4');
        precoCar.setAttribute('id','precoNoCarrinho');
        precoCar.innerText = valor;

        const removendo = document.createElement('span');
        removendo.setAttribute('id','removeDoCarrinho')
        removendo.innerText = 'Remover produto';    

        liCar.appendChild(divPic);
        liCar.appendChild(divInfos);
        
        divPic.appendChild(imagem);
        
        divInfos.appendChild(nomeTxt);
        divInfos.appendChild(precoCar);
        divInfos.appendChild(removendo);

        ListaCarrinho.appendChild(liCar);

        //removendo aviso de carrinho vazio
        const zerandoCarrinho = document.querySelector('.remover');
        zerandoCarrinho.setAttribute('id','remove');
        
        //contador de itens no carrinho
        count += 1;        

        //adiciona box 'TOTAL'
        if(count === 1){
            const removeIdTotal = document.getElementById('toTal');
            removeIdTotal.id = '';
        }
        
        //tabela total quantidade
        const quantidade = document.getElementById('valor1');
        quantidade.innerText = count;

        //tabela total preço
        let sPreco = event.target.parentNode.children[4].textContent;
        sPreco = sPreco.split('').join('').slice('3');

        let nPreco = Number(sPreco);
        tTotal += nPreco;

        const precoTotal= document.getElementById('valor2');
        precoTotal.innerText = `R$ ${tTotal}.00`;
    }    
}

const listaMae = document.getElementById('itensVitrine');
listaMae.addEventListener('click',itensCarrinho);


//  Função que remove itens do carrinho e devolve elementos
//  se o carrinho estiver vazio.

function removendoDoCarrinho(event){
    
    const verify = event.target.id;

    if(verify === 'removeDoCarrinho'){
        event.target.parentElement.parentElement.remove()

        count -= 1;
   
        //tabela quantidade    
        const quantidade = document.getElementById('valor1');    
        quantidade.innerText = count;
        
        //tabela total preço
        let sPreco = event.target.parentNode.children[1].textContent;
        sPreco = sPreco.split('').join('').slice('3');
    
        let nPreco = Number(sPreco);
        tTotal -= nPreco;
    
        const precoTotal= document.getElementById('valor2');
        precoTotal.innerText = `R$ ${tTotal}.00`;

            //adiciona box 'TOTAL'
            if(count === 0){
                const removeIdTotal = document.querySelector('.total');
                removeIdTotal.id = 'toTal';

                const voltaAviso =document.querySelector('.remover')
                voltaAviso.id = '';
            }
    }
}
document.getElementById('carrinhoDeCompras').addEventListener('click',removendoDoCarrinho);

