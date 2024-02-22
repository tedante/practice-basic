/*
=================
FIND EMPTY SEAT
=================

[INSTRUCTION]
Terdapat function findEmptySeat , function ini akan memberikan daftar tempat duduk yang kosong sesuai dengan row yang diinput user.
Terdapat 2 parameter yang pertama adalah array multidimensi yang berisi list tempat duduk, tempat duduk yang telah di booking ditandai dengan huruf X.
Parameter kedua adalah row yang ingin dicari user ('ditandai dengan huruf kapital') .

[EXAMPLE]
param 1 : 
[
  ['ROW', '1', '2', '3', '4', '5', '6'],
  ['A', 'X', 'X', 'X', 'X', ' ', ' '],
  ['B', ' ', 'X', ' ', ' ', ' ', ' '],
  ['C', 'X', 'X', 'X', 'X', ' ', ' '],
  ['D', ' ', ' ', ' ', 'X', 'X', 'X'],
]
param 2 : 
D
output :
Terdapat 3 bangku kosong, D1, D2, D3

[RULES]
- dilarang menggunakan indexof, includes

*/

function findEmptySeat(arr, row) {
  // your code here
  
}

var cinemaSeat2 =
  [
    ['ROW', '10', '11', '12', '13'],
    ['E', 'X', 'X', 'X', 'X'],
    ['F', ' ', 'X', ' ', ' '],
    ['G', 'X', ' ', 'X', 'X'],
    ['H', ' ', ' ', ' ', 'X'],
  ]

console.log(findEmptySeat(cinemaSeat2, 'G'));
// Terdapat 1 bangku kosong, G11

console.log(findEmptySeat(cinemaSeat2, 'Z'));
// Baris Z tidak tersedia

var cinemaSeat = [
  ['ROW', '1', '2', '3', '4', '5', '6'],
  ['A', 'X', 'X', 'X', 'X', ' ', ' '],
  ['B', ' ', 'X', ' ', ' ', ' ', ' '],
  ['C', 'X', 'X', 'X', 'X', 'X ', 'X'],
  ['D', ' ', ' ', ' ', 'X', 'X', 'X'],
]

console.log(findEmptySeat(cinemaSeat, 'D'));
// Terdapat 3 bangku kosong, D1, D2, D3

console.log(findEmptySeat(cinemaSeat, 'A'));
// Terdapat 2 bangku kosong, A5, A6

console.log(findEmptySeat(cinemaSeat, 'C'));
// Bangku di baris C sudah penuh