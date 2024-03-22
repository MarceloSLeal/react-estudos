import ListItem from "./ListItem"

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: number): void,
    loadApi(request: RequestInfo): Promise<ListItem[]>,
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

    async loadApi(request: RequestInfo): Promise<ListItem[]> {
        const response = await fetch(request);
        const responseBody = await response.json();

        if (!Array.isArray(responseBody.products)) {
            throw new Error("A resposta da requisição não é um array");
        }

        return responseBody.products;
    }

    load(): void {

        const prod = this.loadApi(url);

        prod.then((result) => {
            result.forEach((e) => {
                const newListItem = new ListItem(e.id, e.title, e.price,
                    e.brand, e.category, e.thumbnail);
                FullList.instance.addItem(newListItem);
            })
        })

        this.render();
    }

    render(): void {
        let ul = document.getElementById("listItems") as HTMLUListElement;

        const storedList: string | null = localStorage.getItem("myList");
        // console.log(storedList);
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
