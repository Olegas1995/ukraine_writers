let result_1 = 'number' + 3 + 3; // Сначала строки конкатенируются "number" + "3" + "3", затем числа складываются
console.log(result_1); //  "number33"

let result_2 = null + 3; // null переводится в 0 число 
console.log(result_2); //  3 так как можно сложить числа 0 и 3

let result_3 = 5 && "qwerty"; // они оба true , но && возвращает последнее истинное значение(true)
console.log(result_3); //  "qwerty"

let result_4 = +'40' + +'2' + "hillel"; // Оператор + меняет строки на числа
console.log(result_4); //  42hillel


let result_5 = '10' - 5 === 6; // строка 10 преобразуется в число 10 и отнимаем 5 , получается 5 , 5 не равно 6 
console.log(result_5); //  false

let result_6 = true + false; // true это 1, false это 0 1+0=1
console.log(result_6); //  1


let result_7 = '4px' - 3; // строка 4px не конвертируется в число и следовательно не можем отнять от нее ничего
console.log(result_7); //  NaN 

let result_8 = '4' - 3; // строка "4" меняется на число 4 и 4-3=1
console.log(result_8); //  1

let result_9 = '6' + 3 ** 0; // первое действие  - возводим в тепень ( по приоритету) далее конкатенируем строки '6' и "1"
console.log(result_9); //  "61"

let result_10 = 12 / '6'; // в данном случае строка  6' преобразуется в число так как надо выполнить операцию деление с уже имеющимся числом 12
console.log(result_10); //  2

let result_11 = '10' + (5 === 6); // выражение (5 === 6) возвращает false так как 5 не равно 6. и false становится строкой и конкатенируется с 10
console.log(result_11); //  "10false"

let result_12 = null == ''; // null = null /undefined . пустая строка не равна null
console.log(result_12); //  false

let result_13 = 3 ** (9 / 3); // 3 возводиттся в результат 9/3 =3
console.log(result_13); //  9

let result_14 = !!'false' == !!'true'; // строки преобразуются в true , так работает !!
console.log(result_14); //  true

let result_15 = 0 || '0' && 1; // || возвращает первое true 0
console.log(result_15); //  "0"

let result_16 = (+null == false) < 1; // меняю с помощью + null в число = 0, 0 == 0(false это 0) и 0 < 1
console.log(result_16); //  true

let result_17 = false && true || true; // && возвращает  false, второе значение это true . || -  выводит тру
console.log(result_17); //  true

let result_18 = false && (false || true); // внутри скобок 1 действие -||  true, Выражение false && true даст false 
console.log(result_18); //  false

let result_19 = (+null == false) < 1 ** 5; // в скобках первое действие и там 0 == фолс(0) будет true , true это 1 , а 1 не < 1)
console.log(result_19); // false