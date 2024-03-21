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

const initApp = (): void => {
    console.log("Inicializando aplicação...");

    const fullList = FullList.instance;
    const template = ListTemplate.instance;

    // Carrega a lista
    fullList.load();
    console.log("Lista carregada:", fullList);


    // Renderiza a lista no HTML usando o ListTemplate
    template.render(fullList);

    console.log("Lista renderizada com template:", template);


    ///////
    let ul = document.getElementById("listItems") as HTMLUListElement;

    fullList.list.forEach(item => {
        const li = document.createElement("li") as HTMLLIElement;
        li.className = "item";

        const label = document.createElement("label") as HTMLLabelElement;
        label.htmlFor = item.id.toString();
        label.textContent = item.id.toString();
        li.append(label);

        ul.appendChild(li);

    })


    const storedList: string | null = localStorage.getItem("myList");
    console.log(storedList);
    if (typeof storedList !== "string") return;

    const parsedList: {
        _id: number, _title: string, _price: number, _brand: string,
        _category: string, _thumbnail: string
    }[] = JSON.parse(storedList);

    try {

        parsedList.forEach(item => {
            const li = document.createElement("li") as HTMLLIElement;
            li.className = "item";

            const label1 = document.createElement("label") as HTMLLabelElement;
            label1.htmlFor = item._id.toString();
            label1.textContent = item._id.toString();
            li.append(label1);

            const label2 = document.createElement("label") as HTMLLabelElement;
            label2.htmlFor = item._id.toString();
            label2.textContent = item._title;
            li.append(label2);

            const label3 = document.createElement("label") as HTMLLabelElement;
            label3.htmlFor = item._id.toString();
            label3.textContent = item._price.toString();
            li.append(label3);

            const label4 = document.createElement("label") as HTMLLabelElement;
            label4.htmlFor = item._id.toString();
            label4.textContent = item._brand;
            li.append(label4);


            ul.append(li);
        })
    } catch (e) {
        console.log(e);
    }
};

document.addEventListener("DOMContentLoaded", initApp);








