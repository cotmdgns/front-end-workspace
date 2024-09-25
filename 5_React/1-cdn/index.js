// import  가져오기
//import * as calculator from "./calculator.js"; // { a, b, plus, minus }
////import { a, b, plus, minus } from "./calculator.js"; //
import calculator from "./calculator.js"; // { a, b, plus, minus }
import lodash from "lodash";

console.log(calculator.a, calculator.b, calculator.plus(), calculator.minus());

const arr = [1, 1, 1, 1, 4, 4, 3, 3, 6, 7, 1, 3];
const unique = lodash.uniqBy(arr); // 종복체크
console.log(unique);
