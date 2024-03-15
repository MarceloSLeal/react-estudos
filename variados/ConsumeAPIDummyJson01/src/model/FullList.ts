import ListItem from "./ListItem"

interface List {
    list: ListItem[],
    save(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: number): void,
}

export default class FullList implements List {

    static instance: FullList = new FullList();

    private constructor (
        private _list: ListItem[] = [],
    ) {}
    
    get list(): ListItem[] {
        return this._list;
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
