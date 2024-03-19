import FullList from "../model/FullList";

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void,
}

export default class ListTemplate implements DOMList {

    ul: HTMLUListElement;

    static instance: ListTemplate = new ListTemplate();

    private constructor() {
        this.ul = document.getElementById("listItems") as HTMLUListElement;
    }

    clear(): void {
        this.ul.innerHTML = "";
    }

    render(fullList: FullList): void {
        this.clear()

        fullList.list.forEach(item => {

            const li = document.createElement("li") as HTMLLIElement;
            li.className = "item";

            const label = document.createElement("label") as HTMLLabelElement;
            label.htmlFor = item.id.toString();
            label.textContent = item.id.toString();
            li.append(label);

            // TODO adicionar os outros campos

            this.ul.append(li);
        })
    }
}
