'use strict';

console.log(10 + 10 + "10"); /* 2010 -  т.к. первые два операнда имеют тип Number - 
они сложились, а третий операнд имеет тип String, поэтому произошла конкатенация.*/

console.log(10 + "10" + 10); /* 101010 -  т.к. первый операнд число, а второй строка - 
они склеились и их результатом стала строка "1010", а после с этой строкой 
склеился третий операнд.*/

console.log(10 + 10 + +"10"); /* 30 -  т.к. 10 + 10 = 20, а + "10" = 10, 
а 20 + 10 = 30.*/

console.log(10 / -""); /* -Infinity -  т.к. 10 / "-0" = -бесонечность.*/

console.log(10 / +"2,5"); /* NaN - т.к. "2,5" - NaN, потому что вместо запятой 
должна стоять точка ("2.5"), а 10 / NaN = NaN.*/