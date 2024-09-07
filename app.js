function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos.
    // O elemento com o ID "resultados-pesquisa" será usado para inserir o HTML gerado. ]
     
    let section = document.getElementById
    ("resultados-pesquisa"); 
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    //se campoPesquisa for uma string sem nada 
    if (campoPesquisa == "") {
      section.innerHTML = "<p> Nada foi encontrado </p>"
      return
    }

    //console.log(section); // Para fins de depuração, verifica se a seção foi encontrada
  campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar o HTML dos resultados da pesquisa.
    // A cada iteração do loop, mais HTML será adicionado a essa string.

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item (dado) dentro da lista de dados.
    // Para cada dado, um novo elemento HTML será criado e adicionado à string 'resultados'.

    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()                
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      //se titulo includes campoPesquisa
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes
    (campoPesquisa)) {

 // A estrutura HTML inclui um título, uma descrição e um link para mais informações.
      // Cria um novo elemento HTML para representar um resultado da pesquisa.
      resultados += `
        <div class="item-resultado">
          <h2> 
            <a href="#" target="_blank"> ${dado.titulo} </a>
          </h2>
          <p class="discrição-meta"> ${dado.descricao} </p>
          <a href="${dados.link}" target="_blank">Mais informações</a>
        </div>
      `;
      
    // Insere o HTML completo dos resultados dentro da seção selecionada,
    // substituindo qualquer conteúdo anterior.
    //section.innerHTML = resultados;

     }
  }
  if (!resultados) { resultados = " <p>Nada foi encontrado</p>"

  }
  section.innerHTML = resultados;
      }
     
    