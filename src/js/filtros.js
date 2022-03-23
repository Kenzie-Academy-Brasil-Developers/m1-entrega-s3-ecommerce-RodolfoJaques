
//Função que filtra os itens atravez do clicado no menu nav.

/*Array que armazena apenas os itens selecionados no filtro.*/
const novoData = [];

function filter(event){
    
    /*Limpa o array para não repetir os cards*/
    for(let i = novoData.length ; i > 0; i--){
        let lixo = novoData.pop();
    }
    ///////
    if(event.target.textContent === 'Todos'){

        novoCard(dataBase);
    }else if(event.target.textContent === 'Acessórios'){

        for(let i = 0; i < dataBase.length; i++){

            if(dataBase[i].categoria === 'ACESSÓRIOS'){
                novoData.push(dataBase[i]);
            }
        }
        novoCard(novoData);

    }else if(event.target.textContent === 'Camisetas'){
        
        for(let i = 0; i < dataBase.length; i++){

            if(dataBase[i].categoria === 'CAMISETAS'){
                novoData.push(dataBase[i]);
            }
        }
        novoCard(novoData);

    }else if(event.target.textContent === 'Calças'){

        for(let i = 0; i < dataBase.length; i++){

            if(dataBase[i].categoria === 'CALÇAS'){
                novoData.push(dataBase[i]);
            }
        }
        novoCard(novoData);

    }else if(event.target.textContent === 'Calçados'){

        for(let i = 0; i < dataBase.length; i++){

            if(dataBase[i].categoria === 'CALÇADOS'){
                novoData.push(dataBase[i]);
            }
        }
        novoCard(novoData);
    }    
}
document.getElementById('menuNav').addEventListener('click',filter);
console.log();

//Função que filtra itens de acordo com o escrito no navBar

    /*array que armazena o item pesquisado*/
    const dataNavBar = [];
    
    const barra = document.querySelector('input');

function navBar(event){

    /*Limpa o array para não repetir os cards*/
    for(let i = dataNavBar.length ; i > 0; i--){
        let lixo = dataNavBar.pop();
    }

    const barraComp = barra.value.toUpperCase();

    if(event.target.textContent === 'Pesquisar'){

        if(
            barraComp === 'BLACK HAT'
            ||barraComp === 'BLACKHAT'
            ||barraComp === 'BLACK'
            ||barraComp === 'HAT'
            ||barraComp === 'ACESSORIOS'
            ||barraComp === 'ACESSÓRIOS'
            ||barraComp === 'ACESSÓRIO'
            ||barraComp === 'ACESSORIO'
        ){

            for(let i = 0; i < dataBase.length; i++){

                if(dataBase[i].nome === 'Black Hat'){

                    dataNavBar.push(dataBase[i]);
                }
            }
            novoCard(dataNavBar);
        }
        if(
            barraComp === 'MASK'
            ||barraComp === 'ACESSORIOS'
            ||barraComp === 'ACESSÓRIOS'
            ||barraComp === 'ACESSÓRIO'
            ||barraComp === 'ACESSORIO'
        ){

            for(let i = 0; i < dataBase.length; i++){

                if(dataBase[i].nome === 'Mask'){

                    dataNavBar.push(dataBase[i]);
                }
            }
            novoCard(dataNavBar);
        }
        if(
            barraComp === 'LIGHTWEIGHT JACKET'
            || barraComp === 'LIGHTWEIGHTJACKET'
            || barraComp === 'JACKET'
            || barraComp === 'LIGHTWEIGHT'
            || barraComp === 'CAMISETAS'
            || barraComp === 'CAMISETA'
        ){

            for(let i = 0; i < dataBase.length; i++){

                if(dataBase[i].nome === 'Lightweight Jacket'){

                    dataNavBar.push(dataBase[i]);
                }
            }
            novoCard(dataNavBar);
        }
        if(
            barraComp === 'T-SHIRT' 
            || barraComp === 'TSHIRT' 
            || barraComp === 'T SHIRT'
            || barraComp === 'CAMISETAS'
            || barraComp === 'CAMISETA'
        ){

            for(let i = 0; i < dataBase.length; i++){

                if(dataBase[i].nome === 'T-shirt'){

                    dataNavBar.push(dataBase[i]);
                }
            }
            novoCard(dataNavBar);
        }
        if (
            barraComp === 'SHORT-SLEEVE T-SHIRT' 
            || barraComp === 'SHORTSLEEVE TSHIRT'
            || barraComp === 'SHORT-SLEEVE'
            || barraComp === 'TSHIRT'
            || barraComp === 'CAMISETAS'
            || barraComp === 'CAMISETA'
        ){

            for(let i = 0; i < dataBase.length; i++){

                if(dataBase[i].nome === 'Short-Sleeve T-Shirt'){

                    dataNavBar.push(dataBase[i]);
                }
            }
            novoCard(dataNavBar);
        }
        if(
            barraComp === 'CHAMPION PACKABLE JACKET'
            || barraComp === 'CHAMPION PACKABLE'
            || barraComp === 'CHAMPION'
            || barraComp === 'PACKABLE JACKET'
            || barraComp === 'JACKET'
            || barraComp === 'CHAMPIONPACKABLE'
            || barraComp === 'PACKABLE'
            || barraComp === 'CAMISETAS'
            || barraComp === 'CAMISETA'
        ){

            for(let i = 0; i < dataBase.length; i++){

                if(dataBase[i].nome === 'Champion Packable Jacket'){

                    dataNavBar.push(dataBase[i]);
                }
            }
            novoCard(dataNavBar);
        }
        if(
            barraComp === 'CAMISA DE FLANELA'
            || barraComp === 'CAMISA FLANELA'
            || barraComp === 'FLANELA'
            || barraComp === 'CAMISADEFLANELA'
            || barraComp === 'CAMISAFLANELA'
            || barraComp === 'CAMISETAS'
            || barraComp === 'CAMISETA'
        ){

            for(let i = 0; i < dataBase.length; i++){

                if(dataBase[i].nome === 'Camisa de Flanela'){

                    dataNavBar.push(dataBase[i]);
                }
            }
            novoCard(dataNavBar);
        }
        if(
            barraComp === 'CALÇA DE MOLETOM'
            || barraComp === 'CALÇA MOLETOM'
            || barraComp === 'CALÇADEMOLETOM'
            || barraComp === 'CALÇAMOLETOM'
            || barraComp === 'CALCA DE MOLETOM'
            || barraComp === 'CALÇA'
            || barraComp === 'CALCA'
            || barraComp === 'CALÇAS'
            || barraComp === 'CALCAS'
        ){

            for(let i = 0; i < dataBase.length; i++){

                if(dataBase[i].nome === 'Calça de Moletom'){

                    dataNavBar.push(dataBase[i]);
                }
            }
            novoCard(dataNavBar);
        }
        if(
            barraComp === 'TATICAL PANTS'
            || barraComp === 'TATICALPANTS'
            || barraComp === 'TATICAL'
            || barraComp === 'PANTS'
            || barraComp === 'CALÇA'
            || barraComp === 'CALCA'
            || barraComp === 'CALÇAS'
            || barraComp === 'CALCAS'
        ){

            for(let i = 0; i < dataBase.length; i++){

                if(dataBase[i].nome === 'Tatical Pants'){

                    dataNavBar.push(dataBase[i]);
                }
            }
            novoCard(dataNavBar);
        }
        if(
            barraComp === 'CONVERSE ALL-STARS'
            || barraComp === 'CONVERSEALL-STARS'
            || barraComp === 'CONVERSE ALLSTARS'
            || barraComp === 'ALL-STARS'
            || barraComp === 'ALLSTARS'
            || barraComp === 'CONVERSE'
            ||barraComp === 'CALÇADOS'
            ||barraComp === 'CALÇADO'
            ||barraComp === 'CALCADO'
            ||barraComp === 'CALCADOS'
        ){

            for(let i = 0; i < dataBase.length; i++){

                if(dataBase[i].nome === 'Converse All-Stars'){

                    dataNavBar.push(dataBase[i]);
                }
            }
            novoCard(dataNavBar);
        }
        if(
            barraComp === 'BLACK COTURN'            
            ||barraComp === 'BLACKCOTURN'
            ||barraComp === 'BLACK'
            ||barraComp === 'COTURN'
            ||barraComp === 'CALÇADOS'
            ||barraComp === 'CALÇADO'
            ||barraComp === 'CALCADO'
            ||barraComp === 'CALCADOS'
        ){

            for(let i = 0; i < dataBase.length; i++){

                if(dataBase[i].nome === 'Black Coturn'){

                    dataNavBar.push(dataBase[i]);
                }
            }
            novoCard(dataNavBar);
        }
        if(
            barraComp === 'VANS OLD SKOOL'
            ||barraComp === 'VANSOLDSKOOL'
            ||barraComp === 'VANS OLD'
            ||barraComp === 'VANS OLD'
            ||barraComp === 'VANS SKOOL'
            ||barraComp === 'VANS'
            ||barraComp === 'CALÇADOS'
            ||barraComp === 'CALÇADO'
            ||barraComp === 'CALCADO'
            ||barraComp === 'CALCADOS'
        ){

            for(let i = 0; i < dataBase.length; i++){

                if(dataBase[i].nome === 'Vans Old Skool'){

                    dataNavBar.push(dataBase[i]);
                }
            }
            novoCard(dataNavBar);
        }
    }
}
document.getElementById('pesquisa_carrinho').addEventListener('click',navBar);