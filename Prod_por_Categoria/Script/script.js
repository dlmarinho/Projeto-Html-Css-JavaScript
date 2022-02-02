

async function fetchData() {
    var response = await fetch(`https://mocki.io/v1/f2242b55-8f25-4ebb-a295-04f83d2d50bc`);
    var data = await response.json();
        
    data.map(item => {
        
        var card = `
            <div id=${item.id_produto} class="tijolofora" ><h3 id="nome1" style="text-align: center;">${item.nome}</h3>
                <div class="tijoloDentro" >
                    <img id="img1" style="width: 220px;" src=${item.url_img} alt=${item.nome}>
            
                    <p style=" font-size: 20px; margin-left: 20px; display: flex;  color: black;">R$ ${parseFloat(item.preco).toFixed(2)}</p>
                    <button class="but" onclick='descreverProduto("${item.id_produto}")' >Comprar</button>
                </div> 
            </div>
        ` 

        document.getElementById("cardsContainer").insertAdjacentHTML("beforeend", card);
    })
           
}

async function filtrarProduto(categoria) {
    document.getElementById("cardsContainer").innerHTML= "";

    var response = await fetch(`https://mocki.io/v1/f2242b55-8f25-4ebb-a295-04f83d2d50bc`);
    var data = await response.json();

    var produto = data.filter(item => item.categoria == categoria);
    produto.map(item => {
        
        var card = `
            <div id=${item.id_produto} class="tijolofora" ><h3 id="nome1" style="text-align: center;">${item.nome}</h3>
                <div class="tijoloDentro" >
                    <img id="img1" style="width: 220px;" src=${item.url_img} alt=${item.nome}>
            
                    <p style=" font-size: 20px; margin-left: 20px; display: flex;  color: black;">R$ ${parseFloat(item.preco).toFixed(2)}</p>
                    <button class="but" onclick='descreverProduto("${item.id_produto}")'>Comprar</button>
                </div> 
            </div>
        ` 

        document.getElementById("cardsContainer").insertAdjacentHTML("beforeend", card);
    })
}

async function descreverProduto(id_produto) {

    document.getElementById("cardsContainer").innerHTML= "";

    var response1 = await fetch(`https://mocki.io/v1/f2242b55-8f25-4ebb-a295-04f83d2d50bc`);
    var data = await response1.json();

    var produto = data.filter(item => item.id_produto == id_produto);
    produto.map(item =>{
    var cardDescricao = `

    <div id="cardContainerD">
        <div id="titulo">                    
            <h1>Descrição Produto</h1>
        </div>
        <div id="main">
    
        
        
            <div id="comprar">
                
                <div id="boxImagemProd">
                    <h1 id="descriProd">${item.nome}</h1> </h1>
                    <img id="imagemProd" src="${item.url_img}" alt="${item.nome}">
                    <div id="qtdProd">
                        <label for="">Selecione a quantidade <br></label>
                        <input style="width: 30px; margin-left: 50px; margin-right: 50px;" type="number" name="qu" id="">
                        <button class="but">Adicionar ao carrinho</button>
                    </div>
                </div>
            </div>
            
            <div id="descricao">
                <h3 style="margin-top: 30px;">Tijolo em barro cerâmico, desenvolvido com a mais alta
                    tecnologia em tijolos, designe agradavel e extremo requinte.
                    Os tijolos da Serrablocks são feitos pensando em você, sempre com as mais novas tendências,
                </h3>
                <p> <br>  Bloco Cerâmico Personalizado, vedação 8 Furos 9 x 19 x 19cm, 
                    feitos com a tecnologia inovadora  da tinta high contrast plus.
                    Os blocos cerâmicos de vedação são geralmente utilizados na construção de paredes internas,
                    sua principal função é fechar os vãos de construções residenciais ou comerciais. <br>
                    A Serrablocks trás para você a inovação em decoração e bem estar, oque há de mais moderno 
                    no mercado, nossa preocupação é o seu bem estar. 
                </p>
                <hr> 
                <h3>Preço R$ ${parseFloat(item.preco).toFixed(2)}</h3>
                <p>em 1x sem juros no cartão de credito</p>
                <p>R$ ${parseFloat(item.preco).toFixed(2)} em até 10x sem juros no cartão.</p>
                
                <div>
                    
                    <button class="but" onclick="https://www2.correios.com.br/sistemas/precosPrazos/">Calcular frete</button>
                    
                </div>
            </div>
        </div>
    </div>

    `

    document.getElementById("cardsContainer").insertAdjacentHTML("beforeend", cardDescricao);
    })
}



async function fetchDataDescricaoProduto() {
    var response = await fetch(`https://mocki.io/v1/b9baaed9-0703-476c-94c8-35b34e37e55a`);
    var data = await response.json();
    /console.log(response);/

    var endImagem = data[i][3].url_img;
    
        document.getElementById("nome").innerHTML = datadata[i][2].nome;
        document.getElementById("preco").innerHTML = parseFloat(data[i][4].preco);
        document.getElementById("img").setAttribute("src" , endImagem);
    
}