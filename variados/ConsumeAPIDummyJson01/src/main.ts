import ListItem from "./model/ListItem";

const initApp = (): void => {


    /////////////////// Funciona


    // interface Todo {
    //     userId: number,
    //     id: number,
    //     title: string,
    //     completed: boolean,
    // }

    // const urlTodo = "https://jsonplaceholder.typicode.com/todos";

    // async function http<T>(request: RequestInfo): Promise<T> {
    //     const response = await fetch(request);
    //     const body = await response.json();
    //     return body;
    // }

    // const data =  http<Todo[]>(urlTodo);

    // data.then((result) => {
    //         // console.log(result[0].id);
    //     result.forEach((e) => {
    //         // console.log("UserId " + e.userId + " id " + e.id + " title " + e.title + " completed " + e.completed);
    //     })
    // })

    ///////////////////// Funciona

    // interface Products {
    //     id: number,
    //     title: string,
    //     description: string,
    //     price: number,
    // }

    const url = "https://dummyjson.com/products";

    async function products(request: RequestInfo): Promise<ListItem[]> {
        const response = await fetch(request);
        const responseBody = await response.json();

        if(!Array.isArray(responseBody.products)) {
            throw new Error ("A resposta da requisição não é um array.");
        }

        return responseBody.products;
    }

    const prod = products(url);

    prod.then((result) => {
        result.forEach((e) => {
            console.log(e.title);
        });
    }).catch((error) => {
        console.log("Ocorreu um erro ao buscar Produtos", error);
    });

    prod.then((e) => {
        console.log(e.length);
    })

}

document.addEventListener("DOMContentLoaded", initApp);
