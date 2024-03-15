export interface Item {
    id: number,
    title: string,
    price: number,
    brand: string,
    category: string,
    thumbnail: string,
}

export default class ListItem implements Item {

    constructor (
        private _id: number,
        private _title: string,
        private _price: number,
        private _brand: string,
        private _category: string,
        private _thumbnail: string,
    ) {}

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get price(): number {
        return this._price;
    }

    set price(price: number) {
        this._price = price;
    }

    get brand(): string {
        return this._brand;
    }

    set brand(brand: string) {
        this._brand = brand;
    }

    get category(): string {
        return this._category;
    }

    set category(category: string) {
        this._category = category;
    }

    get thumbnail(): string {
        return this._thumbnail;
    }

    set thumbnail(thumbnail: string) {
        this._thumbnail = thumbnail;
    }

}
