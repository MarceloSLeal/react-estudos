import "./css/style.css";
import FullList from "./model/FullList";

const initApp = (): void => {

    const fullList = FullList.instance;
    // const template = ListTemplate.instance;

    fullList.load();

};

document.addEventListener("DOMContentLoaded", initApp);








