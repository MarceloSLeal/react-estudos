import ListItem from "./model/ListItem";

const initApp = (): void => {

    interface Prod {
        id: number,
        title: string,
    }

    const url = "https://dummyjson.com/products";
    const fetchProducts = async (): Promise<Prod[]> => {
        
        const data = await fetch(url)
        .then(res => {
                return res.json()
            }).catch(err => {
                if (err instanceof Error) console.log(err.message);
            })
        return data;
    }

    type FetchProductsReturnType = Awaited<ReturnType<typeof fetchProducts>>;

    fetchProducts().then(prod => console.log(prod));


}

document.addEventListener("DOMContentLoaded", initApp);



// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);
