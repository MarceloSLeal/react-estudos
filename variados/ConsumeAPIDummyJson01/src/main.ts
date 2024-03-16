// import ListItem from "./model/ListItem";
// import axios from "axios";

const initApp = (): void => {

    // interface Products {
    //     id: number,
    //     title: string,
    //     description: string,
    //     price: number,
    // }

    // let productsInstance: Products[] = [];

    // const url = "https://dummyjson.com/products";

    // async function getProductsFromAPI(): Promise<Products[]> {
    //     try {
    //         const response = await axios.get(url);
    //         const productsAPI: Products[] = response.data;
    //         return productsAPI;
    //     } catch (error) {
    //         console.error("Error to get API " + error);
    //         return [];
    //     }
    // }

    // async function main(): Promise<Products[]> {
    //     productsInstance = await getProductsFromAPI();
    //     console.log(productsInstance.length);
    //     return productsInstance;
    // }

    // console.log(main());


    ///////////////////


    interface Todo {
        userId: number,
        id: number,
        title: string,
        completed: boolean,
    }

    const urlTodo = "https://jsonplaceholder.typicode.com/todos";

    async function http<T>(request: RequestInfo): Promise<T> {
        const response = await fetch(request);
        const body = await response.json();
        return body;
    }

    const data =  http<Todo[]>(urlTodo);

    data.then((result) => {
            // console.log(result[0].id);
        result.forEach((e) => {
            // console.log("UserId " + e.userId + " id " + e.id + " title " + e.title + " completed " + e.completed);
        })
    })

    /////////////////////


    interface Products {
        id: number,
        title: string,
        description: string,
        price: number,
    }

    const url = "https://dummyjson.com/products";

    async function products<T>(request: RequestInfo): Promise<T> {
        const response = await fetch(request);
        const body = await response.json();
        return body;
    }

    const prod = products<Products[]>(url);

    prod.then((result) => {
        result.forEach((e) => {
            console.log(e.title);
        })
    })

}

document.addEventListener("DOMContentLoaded", initApp);



// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);
