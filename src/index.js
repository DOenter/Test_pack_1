console.log ("hello");
import { sum } from "./sum";
console.log(sum(2,3));

let heading = document.querySelector("#demo"),
sumValue = sum(10,5);
heading.innerHTML = `10 + 5 = ${sumValue}`;

import "./css/index.css";