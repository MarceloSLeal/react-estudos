"use strict";
// let span: HTMLElement | null
// span = document.getElementById("year");
// let thisYear: string = new Date().getFullYear().toString();
// if (span) {
//     span.setAttribute("datetime", thisYear);
//     span.textContent = thisYear;
// }
const span = document.getElementById("year");
const thisyear = new Date().getFullYear().toString();
span.setAttribute("datetime", thisyear);
span.textContent = thisyear;
