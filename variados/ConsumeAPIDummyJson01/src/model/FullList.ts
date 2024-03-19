import ListItem from "./ListItem"

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: number): void,
    // loadApi(request: RequestInfo): Promise<ListItem[]>,
}

const url = "https://dummyjson.com/products";

export default class FullList implements List {

    static instance: FullList = new FullList();

    private constructor(
        private _list: ListItem[] = [],
    ) { }

    get list(): ListItem[] {
        return this._list;
    }

    private async loadApi(request: RequestInfo): Promise<ListItem[]> {
        const response = await fetch(request);
        const responseBody = await response.json();

        if (!Array.isArray(responseBody.products)) {
            throw new Error("A resposta da requisição não é um array");
        }

        return responseBody.products;
    }

    load(): void {
        //     const storedList: string | null = localStorage.getItem("myList");
        //     if (typeof storedList !== "string") return;

        //     const parsedList: {
        //         _id: number, _title: string, _price: number,
        //         _brand: string, _category: string, _thumbnail: string
        //     }[]
        //         = JSON.parse(storedList);

        //     parsedList.forEach(obj => {
        //         const newListItem = new ListItem(obj._id, obj._title,
        //             obj._price, obj._brand, obj._category, obj._thumbnail);
        //         FullList.instance.addItem(newListItem);
        //     })

        const prod = this.loadApi(url);

        prod.then((result) => {
            result.forEach((e) => {
                const newListItem = new ListItem(e.id, e.title, e.price,
                    e.brand, e.category, e.thumbnail);
                FullList.instance.addItem(newListItem);
            })
        })
    }

    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list));
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj);
        this.save();
    }

    removeItem(id: number): void {
        this._list = this._list.filter(item => item.id !== id);
    }

}
