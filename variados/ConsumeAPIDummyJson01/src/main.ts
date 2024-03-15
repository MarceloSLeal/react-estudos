import ListItem from "./model/ListItem";

const initApp = (): void => {

    let listItem: ListItem[] = [];

    const url: string = "https://dummyjson.com/products";
    async function fetchJson(urlPath: string): Promise<ListItem[]> {
        const response = await fetch(urlPath);
        if (!response.ok) {
            throw new Error("Forsooth, a scourge upon our fetch quest: " +
                response.statusText);
        }
        const jsonData: { products: ListItem[] } = await response.json();
        return jsonData.products;
    }

    fetchJson(url)
        .then(data => {
            
            listItem = data;
            
            // console.log(listItem);
        })
        .catch(error => {
            console.log("Error occour when searching the data " + error);
        });


}

document.addEventListener("DOMContentLoaded", initApp);



// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);
