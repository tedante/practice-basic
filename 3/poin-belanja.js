/**
* =========================
* Mengumpulkan poin belanja
* =========================
*
* Ibu sedang mengumpulan poin belanja dan kita diminta membantunya.
* Dari list barang yang ingin ibu beli, yang sudah ibu urutkan dari
* pentingnya barang itu, kumpulkanlah sebanyak mungkin poin belanja
* dengan modal yang diberikan.
*
* Maksimalkanlah beli barang dengan poin terbanyak.
* Ibu mau kita membeli barang sesuai dari list ibu.
* Jika sudah sampai barang terakhir di list dan
* kita masih ada sisa uang, maka kita mulai lagi membeli
* dari barang pertama di list.
*
* Daftar Harga Barang:
* | Nama        | Harga        | Poin  |
* | ----------- | ------------ | ----- |
* | Shampoo     | Rp    20.000 |  100  |
* | Sabun       | Rp    10.000 |   90  |
* | Sepatu      | Rp   200.000 |   85  |
* | Baju Tidur  | Rp   200.000 |   70  |
* | Kompor      | Rp 2.000.000 |   65  |
* | Bantal      | Rp    25.000 |   60  |
* | Taplak Meja | Rp    30.000 |   50  |
* | Daging Sapi | Rp   300.000 |   20  |
* | Sepeda      | Rp 1.000.000 |   10  |
* | Boneka      | Rp    50.000 |    5  |
*
* Jadi saat punya uang Rp. 40.000,-
* Kita harusnya membeli shampoo 1 dan sabun 2 (bukan shampoo 2)
* karena kita beli dulu shampoo, lalu sabun, lalu tidak cukup uang untuk
* barang berikut di list sampai boneka, baru kita mulai lagi
* dari beli shampoo
*
* Dan saat punya uang Rp. 55.000,-
* Kita harusnya membeli shampoo 1, sabun 1, dan bantal 1
*/

function belanja(modal) { //100000
    let list = [
        ['Shampoo', 20000, 100], 
        ['Sabun', 10000, 90], 
        ['Sepatu', 200000, 85], 
        ['Baju Tidur', 200000, 70], 
        ['Kompor', 2000000, 65],
        ['Bantal', 25000, 60], 
        ['Taplak Meja', 30000, 50],
        ['Daging Sapi', 300000, 20],
        ['Sepeda', 1000000, 10],
        ['Boneka', 50000, 5] 
    ]

    // code here
}

// console.log(belanja(40000))
console.log(belanja(100000))
// { belanja: { Shampoo: 1, Sabun: 2, Bantal: 1, 'Taplak Meja': 1 },
//   kembalian: 5000,
//   totalPoin: 390 }
console.log(belanja(1000000))
   // { belanja:
   //    { Shampoo: 3,
   //      Sabun: 3,
   //      Sepatu: 1,
   //      'Baju Tidur': 1,
   //      Bantal: 2,
   //      'Taplak Meja': 2,
   //      'Daging Sapi': 1,
   //      Boneka: 2 },
   //   kembalian: 0,
   //   totalPoin: 975 }