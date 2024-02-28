// let span: HTMLElement | null
// span = document.getElementById("year");
// let thisYear: string = new Date().getFullYear().toString();

// if (span) {
//     span.setAttribute("datetime", thisYear);
//     span.textContent = thisYear;
// }

const span = document.getElementById("year") as HTMLSpanElement;
const thisyear: string = new Date().getFullYear().toString();
span.setAttribute("datetime", thisyear);
span.textContent = thisyear;
