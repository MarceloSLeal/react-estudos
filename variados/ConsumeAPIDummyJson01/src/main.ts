// import "./css/style.css";
// import FullList from "./model/FullList";
// import ListItem from "./model/ListItem";
// import ListTemplate from "./templates/ListTemplate";

// const initApp = (): void => {

//     const fullList = FullList.instance;
//     const template = ListTemplate.instance;

//     const div = document.getElementById("addUl") as HTMLDivElement;

//     fullList.load();
//     template.render(fullList);

//     

//     // const url = "https://dummyjson.com/products";

//     // async function products(request: RequestInfo): Promise<ListItem[]> {
//     //     const response = await fetch(request);
//     //     const responseBody = await response.json();

//     //     if(!Array.isArray(responseBody.products)) {
//     //         throw new Error ("A resposta da requisição não é um array.");
//     //     }

//     //     return responseBody.products;
//     // }

//     // const prod = products(url);

//     // prod.then((result) => {
//     //     result.forEach((e) => {
//     //         console.log(e.title);
//     //     });
//     // }).catch((error) => {
//     //     console.log("Ocorreu um erro ao buscar Produtos", error);
//     // });

//     // prod.then((e) => {
//     //     console.log(e.length);
//     // })

// }

// document.addEventListener("DOMContentLoaded", initApp);

import "./css/style.css";
import FullList from "./model/FullList";
import ListTemplate from "./templates/ListTemplate";

const initApp = async (): Promise<void> => {
    console.log("Inicializando aplicação...");

    const fullList = FullList.instance;
    const template = ListTemplate.instance;

    // Carrega a lista
    await fullList.load();
    console.log("Lista carregada:", fullList);

    // Obtém a referência para o elemento ul
    const ul = document.getElementById("listItems");
    console.log("Elemento ul:", ul);

    // Verifica se o elemento ul existe
    if (ul) {
        // Limpa o conteúdo existente
        ul.innerHTML = '';
        console.log("Conteúdo do ul limpo.");

        // Renderiza a lista no HTML usando o ListTemplate
        template.render(fullList);

        console.log("Lista renderizada com template:", fullList);
    } else {
        console.error("Elemento ul não encontrado.");
    }
};

document.addEventListener("DOMContentLoaded", initApp);







