// import ListItem from "./model/ListItem";
import axios from "axios";

const initApp = (): void => {

    interface Products {
        id: number,
        title: string,
        description: string,
        price: number,
    }

    let productsInstance: Products[] = [];

    const url = "https://dummyjson.com/products";

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

    let todoInstance: Todo[] = [];

    async function fetchToDo<T>(resourceUrl: string): Promise<T[]> {
        return fetch(resourceUrl).then(response => {
            return response.json();
        })
    }

    fetchToDo<Todo>("https://jsonplaceholder.typicode.com/todos")
        .then((toDoItem) => {
            // let myNewToDo: Todo[] = toDoItem
            // console.log(toDoItem);
            console.log(toDoItem.length);
            console.log(toDoItem[2]);
            
            for(let i = 0; i > toDoItem.length; i++) {
                todoInstance[i].userId = toDoItem[i].userId;
            }
        });

    todoInstance.forEach((e) => {
        console.log(e);
    })

    console.log(todoInstance.length);



}

document.addEventListener("DOMContentLoaded", initApp);



// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);
